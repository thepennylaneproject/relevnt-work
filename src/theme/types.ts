/**
 * THEME TYPES - MINIMAL VERSION
 * Core types for the Relevnt theme system
 */

// ============================================================================
// CORE THEME TYPES
// ============================================================================

export type ThemeName = 'Welcome' | 'DeepWater' | 'Diamond' | 'Steel';

export type ThemeMode = 'Light' | 'Dark';

export type AssetType =
  | 'Hero'
  | 'FeatureCard'
  | 'CTABackground'
  | 'Testimonial'
  | 'Logo'
  | 'Icon'
  | 'Pattern';

// ============================================================================
// ASSET TYPES
// ============================================================================

export interface ThemeAsset {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface AssetVariants {
  v1: ThemeAsset;
  v2?: ThemeAsset;
  v3?: ThemeAsset;
  v4?: ThemeAsset;
}

export interface ModeAssets {
  Light: AssetVariants;
  Dark: AssetVariants;
}

export interface ThemeAssets {
  Hero: ModeAssets;
  FeatureCard: ModeAssets;
  CTABackground: ModeAssets;
  Testimonial: ModeAssets;
  Logo: ModeAssets;
  Icon: ModeAssets;
  Pattern: ModeAssets;
}

export interface AssetConfig {
  Welcome: ThemeAssets;
  DeepWater: ThemeAssets;
  Diamond: ThemeAssets;
  Steel: ThemeAssets;
}

// ============================================================================
// CONSTANTS
// ============================================================================

export const FALLBACK_IMAGE_URL = 'https://via.placeholder.com/800x600?text=Image+Not+Found';

export const ALL_THEMES: readonly ThemeName[] = ['Welcome', 'DeepWater', 'Diamond', 'Steel'] as const;
