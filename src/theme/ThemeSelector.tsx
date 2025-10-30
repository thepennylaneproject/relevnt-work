/**
 * THEME SELECTOR COMPONENT
 * 
 * A UI component that lets users switch between available themes
 * Respects access control - free users only see Welcome
 * 
 * 🎓 This demonstrates:
 * - Using the custom hook
 * - Conditional rendering based on access control
 * - Accessible UI patterns
 * - CSS-in-JS styling (you can adapt to your preferred method)
 */

import React from 'react';
import { useRelevntTheme } from './RelevntThemeProvider';
import type { ThemeName } from './types';

// ============================================================================
// THEME METADATA
// ============================================================================

/**
 * 🎓 CONFIGURATION: Keep display data separate from logic
 * This makes it easy to update UI text without touching the business logic
 */
const THEME_METADATA: Record<ThemeName, {
  displayName: string;
  description: string;
  emoji: string;
}> = {
  Welcome: {
    displayName: 'Welcome',
    description: 'Approachable, fresh, optimistic',
    emoji: '🌅',
  },
  DeepWater: {
    displayName: 'Deep Water',
    description: 'Refined, intelligent, dynamic',
    emoji: '🌊',
  },
  Diamond: {
    displayName: 'Diamonds',
    description: 'Elegant, crystalline',
    emoji: '💎',
  },
  Steel: {
    displayName: 'Steel',
    description: 'Luxurious, exclusive, powerful',
    emoji: '⚡',
  },
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function ThemeSelector() {
  const {
    currentTheme,
    setTheme,
    availableThemes,
  } = useRelevntTheme();
  
  /**
   * 🎓 EARLY RETURN PATTERN: If user only has one theme, don't show selector
   * This improves UX by not showing controls that don't do anything
   */
  if (availableThemes.length === 1) {
    return null;
  }
  
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Choose Your Theme</h3>
      <p style={styles.subtitle}>Select a theme that matches your brand and style.
      </p>
      
      <div style={styles.themeGrid}>
        {/**
         * 🎓 ARRAY ITERATION: We map over ALL themes, but show them differently
         * based on whether the user has access
         */}
        {(Object.keys(THEME_METADATA) as ThemeName[]).map((theme) => {
          const metadata = THEME_METADATA[theme];
          const isAvailable = availableThemes.includes(theme);
          const isActive = currentTheme === theme;
          
          return (
            <ThemeCard
              key={theme}
              theme={theme}
              metadata={metadata}
              isAvailable={isAvailable}
              isActive={isActive}
              onSelect={() => setTheme(theme)}
            />
          );
        })}
      </div>
    </div>
  );
}

// ============================================================================
// THEME CARD SUB-COMPONENT
// ============================================================================

/**
 * Individual theme card
 * 
 * 🎓 COMPONENT COMPOSITION: Break complex UIs into smaller, reusable pieces
 */
interface ThemeCardProps {
  theme: ThemeName;
  metadata: typeof THEME_METADATA[ThemeName];
  isAvailable: boolean;
  isActive: boolean;
  onSelect: () => void;
}

function ThemeCard({
  metadata,
  isAvailable,
  isActive,
  onSelect,
}: ThemeCardProps) {
  /**
   * 🎓 DYNAMIC STYLES: Build styles based on component state
   */
  const cardStyle: React.CSSProperties = {
    ...styles.card,
    ...(isActive && styles.cardActive),
    ...(isAvailable && styles.cardAvailable),
    ...(!isAvailable && styles.cardLocked),
  };
  
  return (
    <button
      onClick={isAvailable ? onSelect : undefined}
      disabled={!isAvailable}
      style={cardStyle}
      /**
       * 🎓 ACCESSIBILITY: ARIA attributes help screen readers understand your UI
       */
      aria-label={`${metadata.displayName} theme ${isActive ? '(active)' : ''} ${!isAvailable ? '(locked - upgrade to unlock)' : ''}`}
      aria-pressed={isActive}
      aria-disabled={!isAvailable}
    >
      <div style={styles.cardEmoji}>{metadata.emoji}</div>
      <div style={styles.cardName}>{metadata.displayName}</div>
      <div style={styles.cardDescription}>{metadata.description}</div>
      
      {!isAvailable && (
        <div style={styles.lockBadge}>
          🔒 Upgrade to Unlock
        </div>
      )}
      
      {isActive && (
        <div style={styles.activeBadge}>
          ✓ Active
        </div>
      )}
    </button>
  );
}

// ============================================================================
// STYLES
// ============================================================================

/**
 * 🎓 STYLING APPROACH: This uses inline styles for simplicity
 * In a real app, you might use:
 * - CSS Modules
 * - Styled Components
 * - Tailwind CSS
 * - Your existing CSS framework
 * 
 * The important part is the LOGIC, not the styling method
 */
const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: '24px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#1a1a1a',
  },
  
  subtitle: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '24px',
  },
  
  themeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px',
  },
  
  card: {
    padding: '24px',
    borderRadius: '12px',
    border: '2px solid #e0e0e0',
    background: '#fff',
    cursor: 'not-allowed',
    transition: 'all 0.2s ease',
    textAlign: 'left',
    position: 'relative',
    opacity: 0.6,
  },
  
  cardAvailable: {
    cursor: 'pointer',
    opacity: 1,
  },
  
  cardActive: {
    borderColor: '#4E808D',
    background: '#f0f8fa',
    boxShadow: '0 4px 12px rgba(78, 128, 141, 0.15)',
  },
  
  cardLocked: {
    opacity: 0.5,
  },
  
  cardEmoji: {
    fontSize: '48px',
    marginBottom: '16px',
  },
  
  cardName: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#1a1a1a',
  },
  
  cardDescription: {
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.5',
  },
  
  lockBadge: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    padding: '4px 12px',
    background: '#ffc107',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#000',
  },
  
  activeBadge: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    padding: '4px 12px',
    background: '#4E808D',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#fff',
  },
};

// ============================================================================
// COMPACT VARIANT (Optional)
// ============================================================================

/**
 * A simpler, dropdown-based theme selector
 * 
 * 🎓 MULTIPLE VARIANTS: Provide different UI options for different context
 */
export function ThemeSelectorDropdown() {
  const { currentTheme, setTheme, availableThemes } = useRelevntTheme();
  
  if (availableThemes.length === 1) {
    return null;
  }
  
  return (
    <div style={styles.dropdownContainer}>
      <label htmlFor="theme-select" style={styles.dropdownLabel}>
        Theme:
      </label>
      <select
        id="theme-select"
        value={currentTheme}
        onChange={(e) => setTheme(e.target.value as ThemeName)}
        style={styles.dropdown}
      >
        {availableThemes.map((theme) => (
          <option key={theme} value={theme}>
            {THEME_METADATA[theme].emoji} {THEME_METADATA[theme].displayName}
          </option>
        ))}
      </select>
    </div>
  );
}

const dropdownStyles: Record<string, React.CSSProperties> = {
  dropdownContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  
  dropdownLabel: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#1a1a1a',
  },
  
  dropdown: {
    padding: '8px 12px',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    background: '#fff',
    fontSize: '14px',
    cursor: 'pointer',
  },
};

Object.assign(styles, dropdownStyles);
