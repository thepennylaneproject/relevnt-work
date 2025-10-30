/**
 * FEATURE CARD COMPONENT
 * 
 * An example component that displays a themed feature card
 * Demonstrates how to use getAsset() to load the correct image
 * 
 * 🎓 This shows:
 * - Using themed assets in components
 * - Handling image loading states
 * - Responsive design patterns
 * - Prop-based customization
 */

import React, { useState } from 'react';
import { useRelevntTheme } from 'src/theme/RelevntThemeProvider';

// ============================================================================
// COMPONENT PROPS
// ============================================================================

/**
 * 🎓 TYPESCRIPT INTERFACE: Define exactly what props this component accepts
 * This gives you autocomplete and type checking when using the component
 */
interface FeatureCardProps {
  title: string;
  description: string;
  /** Which version of the FeatureCard asset to use (1-4) */
  assetVersion?: number;
  /** Optional click handler */
  onClick?: () => void;
  /** Optional additional CSS classes */
  className?: string;
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function FeatureCard({
  title,
  description,
  assetVersion = 1,
  onClick,
  className = '',
}: FeatureCardProps) {
  
  /**
   * 🎓 CUSTOM HOOK: Get the getAsset function from our theme context
   * This is how components access themed assets
   */
  const { getAsset, currentTheme, currentMode } = useRelevntTheme();
  
  /**
   * 🎓 LOCAL STATE: Track image loading state for better UX
   */
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  /**
   * Get the themed feature card image URL
   * 
   * 🎓 KEY CONCEPT: This single line gets the right image based on:
   * - Current theme (Welcome/DeepWater/Diamond/Steel)
   * - Current mode (Light/Dark)
   * - Asset version (1-4)
   */
  const imageUrl = getAsset('FeatureCard', assetVersion);
  
  /**
   * 🎓 COMPUTED STYLES: Build styles dynamically based on component state
   */
  const cardStyle: React.CSSProperties = {
    ...styles.card,
    ...(onClick && styles.cardClickable),
  };
  
  return (
    <article 
      className={className}
      style={cardStyle}
      onClick={onClick}
      /**
       * 🎓 ACCESSIBILITY: Semantic HTML and ARIA attributes
       */
      role={onClick ? 'button' : 'article'}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Image Container */}
      <div style={styles.imageContainer}>
        {/**
         * 🎓 LOADING STATES: Show skeleton while image loads
         * This prevents layout shift and gives visual feedback
         */}
        {!imageLoaded && !imageError && (
          <div style={styles.imageSkeleton}>
            Loading...
          </div>
        )}
        
        {/**
         * 🎓 ERROR HANDLING: Show fallback if image fails to load
         */}
        {imageError && (
          <div style={styles.imageError}>
            Image failed to load
          </div>
        )}
        
        <img
          src={imageUrl}
          alt={`${title} feature illustration`}
          style={{
            ...styles.image,
            opacity: imageLoaded ? 1 : 0,
          }}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            console.error('Failed to load feature card image:', imageUrl);
          }}
          /**
           * 🎓 PERFORMANCE: loading="lazy" defers offscreen images
           * This improves initial page load time
           */
          loading="lazy"
        />
        
        {/**
         * 🎓 DEBUGGING AID: Show which asset is loaded (remove in production)
         */}
        <div style={styles.assetInfo}>
          {currentTheme} • {currentMode} • v{assetVersion}
        </div>
      </div>
      
      {/* Content */}
      <div style={styles.content}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
        
        {onClick && (
          <div style={styles.cta}>
            Learn More →
          </div>
        )}
      </div>
    </article>
  );
}

// ============================================================================
// STYLES
// ============================================================================

/**
 * 🎓 STYLE OBJECT: Keeps styles organized and reusable
 * You can extract this to a separate file or use your preferred CSS method
 */
const styles: Record<string, React.CSSProperties> = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '16px',
    overflow: 'hidden',
    background: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },
  
  cardClickable: {
    cursor: 'pointer',
  },
  
  imageContainer: {
    position: 'relative',
    /**
     * 🎓 ASPECT RATIO: Maintain 4:5 aspect ratio (from your asset specs)
     * This prevents layout shift when images load
     */
    aspectRatio: '4 / 5',
    background: '#f5f5f5',
    overflow: 'hidden',
  },
  
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.3s ease',
  },
  
  imageSkeleton: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite',
    color: '#999',
    fontSize: '14px',
  },
  
  imageError: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fee',
    color: '#c00',
    fontSize: '14px',
  },
  
  assetInfo: {
    position: 'absolute',
    bottom: '8px',
    right: '8px',
    padding: '4px 8px',
    background: 'rgba(0, 0, 0, 0.7)',
    color: '#fff',
    fontSize: '10px',
    borderRadius: '4px',
    fontFamily: 'monospace',
  },
  
  content: {
    padding: '20px',
  },
  
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#1a1a1a',
  },
  
  description: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#666',
    marginBottom: '12px',
  },
  
  cta: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#4E808D',
  },
};

// ============================================================================
// GRID LAYOUT COMPONENT (BONUS)
// ============================================================================

/**
 * A helper component to display multiple feature cards in a grid
 * 
 * 🎓 COMPOSITION: Build complex layouts from simple components
 */
interface FeatureCardGridProps {
  children: React.ReactNode;
}

export function FeatureCardGrid({ children }: FeatureCardGridProps) {
  return (
    <div style={gridStyles.container}>
      {children}
    </div>
  );
}

const gridStyles: Record<string, React.CSSProperties> = {
  container: {
    display: 'grid',
    /**
     * 🎓 RESPONSIVE GRID: Automatically adapts to screen size
     * - Mobile: 1 column
     * - Tablet: 2 columns
     * - Desktop: 3 columns
     */
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    padding: '24px',
  },
};

// ============================================================================
// USAGE EXAMPLES (FOR DOCUMENTATION)
// ============================================================================

/**
 * 🎓 EXAMPLE USAGE:
 * 
 * ```tsx
 * // Single feature card
 * <FeatureCard
 *   title="Resume Builder"
 *   description="Create professional resumes in minutes"
 *   assetVersion={1}
 *   onClick={() => navigate('/resume')}
 * />
 * 
 * // Multiple cards in a grid
 * <FeatureCardGrid>
 *   <FeatureCard
 *     title="Resume Builder"
 *     description="Create professional resumes"
 *     assetVersion={1}
 *   />
 *   <FeatureCard
 *     title="Job Search"
 *     description="Find your dream job"
 *     assetVersion={2}
 *   />
 *   <FeatureCard
 *     title="Interview Prep"
 *     description="Practice with AI"
 *     assetVersion={3}
 *   />
 * </FeatureCardGrid>
 * ```
 * 
 * The images automatically update when user changes theme or mode!
 */
