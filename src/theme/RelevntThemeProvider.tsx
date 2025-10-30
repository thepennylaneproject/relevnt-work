/**
 * RELEVNT THEME PROVIDER - CLEAN VERSION
 * 
 * This component wraps your app and provides theme functionality to all child components.
 * All themes available to all users.
 */

import React, { createContext, useContext, useState, useMemo, useCallback, ReactNode } from 'react';
import type {
  ThemeName,
  ThemeMode,
  AssetType,
} from '@/theme/types';
import { FALLBACK_IMAGE_URL } from '@/theme/types';
import { getAssetByPath } from '@/theme/assetConfig';

// ============================================================================
// TYPES (defined here to avoid circular imports)
// ============================================================================

export interface RelevntThemeContextValue {
  // Current state
  currentTheme: ThemeName;
  currentMode: ThemeMode;
  
  // Actions
  setTheme: (theme: ThemeName) => void;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
  
  // Asset access
  getAsset: (assetType: AssetType, version?: number) => string;
  
  // Available themes
  availableThemes: ThemeName[];
  canAccessTheme: (theme: ThemeName) => boolean;
}

export interface RelevntThemeProviderProps {
  children: ReactNode;
  initialTheme?: ThemeName;
  initialMode?: ThemeMode;
}

// ============================================================================
// CREATE CONTEXT
// ============================================================================

const RelevntThemeContext = createContext<RelevntThemeContextValue | null>(null);

// ============================================================================
// THEME PROVIDER COMPONENT
// ============================================================================

export function RelevntThemeProvider({
  children,
  initialTheme = 'Welcome',
  initialMode = 'Light',
}: RelevntThemeProviderProps) {
  
  // ==========================================================================
  // STATE MANAGEMENT
  // ==========================================================================
  
  const [currentTheme, setCurrentThemeState] = useState<ThemeName>(initialTheme);
  const [currentMode, setCurrentModeState] = useState<ThemeMode>(initialMode);
  
  // ==========================================================================
  // AVAILABLE THEMES (All themes available!)
  // ==========================================================================
  
  const availableThemes = useMemo<ThemeName[]>(() => {
    return ['Welcome', 'DeepWater', 'Diamond', 'Steel'];
  }, []);
  
  const canAccessTheme = useCallback((_theme: ThemeName): boolean => {
    return true; // All themes available
  }, []);
  
  // ==========================================================================
  // THEME SETTERS
  // ==========================================================================
  
  const setTheme = useCallback((theme: ThemeName) => {
    setCurrentThemeState(theme);
    console.log(`Theme changed to: ${theme}`);
  }, []);
  
  const setMode = useCallback((mode: ThemeMode) => {
    setCurrentModeState(mode);
    console.log(`Mode changed to: ${mode}`);
  }, []);
  
  const toggleMode = useCallback(() => {
    setCurrentModeState((prev) => (prev === 'Light' ? 'Dark' : 'Light'));
  }, []);
  
  // ==========================================================================
  // ASSET RETRIEVAL
  // ==========================================================================
  
  const getAsset = useCallback((
    assetType: AssetType,
    version: number = 1
  ): string => {
    const versionIndex = version - 1;
    
    const asset = getAssetByPath(
      currentTheme,
      currentMode,
      assetType,
      versionIndex
    );
    
    if (!asset) {
      console.warn(
        `Asset not found: ${currentTheme}/${currentMode}/${assetType} v${version}. ` +
        `Using fallback image.`
      );
      return FALLBACK_IMAGE_URL;
    }
    
    return asset.url;
  }, [currentTheme, currentMode]);
  
  // ==========================================================================
  // CONTEXT VALUE
  // ==========================================================================
  
  const contextValue = useMemo<RelevntThemeContextValue>(() => ({
    currentTheme,
    currentMode,
    setTheme,
    setMode,
    toggleMode,
    getAsset,
    availableThemes,
    canAccessTheme,
  }), [
    currentTheme,
    currentMode,
    setTheme,
    setMode,
    toggleMode,
    getAsset,
    availableThemes,
    canAccessTheme,
  ]);
  
  // ==========================================================================
  // RENDER
  // ==========================================================================
  
  return (
    <RelevntThemeContext.Provider value={contextValue}>
      {children}
    </RelevntThemeContext.Provider>
  );
}

// ============================================================================
// CUSTOM HOOKS
// ============================================================================

export function useRelevntTheme(): RelevntThemeContextValue {
  const context = useContext(RelevntThemeContext);
  
  if (!context) {
    throw new Error(
      'useRelevntTheme must be used within a RelevntThemeProvider. ' +
      'Wrap your app with <RelevntThemeProvider> first.'
    );
  }
  
  return context;
}

export function useIsThemeActive(theme: ThemeName): boolean {
  const { currentTheme } = useRelevntTheme();
  return currentTheme === theme;
}

export function useIsDarkMode(): boolean {
  const { currentMode } = useRelevntTheme();
  return currentMode === 'Dark';
}

export function useThemeAsset(assetType: AssetType, version?: number): string {
  const { getAsset } = useRelevntTheme();
  return getAsset(assetType, version);
}

export function useThemeDebug() {
  const context = useRelevntTheme();
  
  React.useEffect(() => {
    console.group('🎨 Relevnt Theme State');
    console.log('Current Theme:', context.currentTheme);
    console.log('Current Mode:', context.currentMode);
    console.log('Available Themes:', context.availableThemes);
    console.groupEnd();
  }, [context]);
}
