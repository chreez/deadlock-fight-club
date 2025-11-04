/**
 * Asset path utilities for Deadlock Fight Club
 * Provides consistent asset path resolution for heroes, items, and abilities
 */

/**
 * Converts a name to a kebab-case asset filename
 * Examples:
 *   "Mo & Krill" → "mo-and-krill"
 *   "Lady Geist" → "lady-geist"
 *   "Reactive Barrier" → "reactive-barrier"
 */
export function toAssetName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[()]/g, '') // Remove parentheses
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/&/g, 'and') // Replace & with 'and'
    .replace(/'/g, ''); // Remove apostrophes
}

/**
 * Get the path to a hero portrait
 * @param heroName - Hero name (e.g., "Bebop", "Mo & Krill")
 * @param assetName - Optional override for asset filename
 * @returns Absolute path to hero portrait
 */
export function getHeroPortrait(heroName: string, assetName?: string): string {
  const filename = assetName || `${toAssetName(heroName)}.png`;
  return `/assets/heroes/${filename}`;
}

/**
 * Get the path to an item icon
 * @param itemName - Item name (e.g., "Reactive Barrier")
 * @param category - Item category ("weapon", "vitality", or "spirit")
 * @returns Absolute path to item icon
 */
export function getItemIcon(itemName: string, category: 'weapon' | 'vitality' | 'spirit'): string {
  const filename = `${toAssetName(itemName)}.png`;
  return `/assets/items/${category}/${filename}`;
}

/**
 * Get the path to an ability icon
 * @param heroName - Hero name (e.g., "Bebop")
 * @param abilityName - Ability name (e.g., "Hook", "Hyper Beam")
 * @returns Absolute path to ability icon
 */
export function getAbilityIcon(heroName: string, abilityName: string): string {
  const heroFolder = toAssetName(heroName);
  const abilityFile = toAssetName(abilityName);
  return `/assets/abilities/${heroFolder}/${abilityFile}.png`;
}

/**
 * Get all ability icons for a specific hero
 * Note: This requires knowledge of ability names.
 * For dynamic discovery, you'd need to use a build-time script.
 *
 * @param heroName - Hero name
 * @param abilityNames - Array of ability names for this hero
 * @returns Array of ability icon paths
 */
export function getHeroAbilities(heroName: string, abilityNames: string[]): string[] {
  return abilityNames.map(ability => getAbilityIcon(heroName, ability));
}

/**
 * Generate an image error handler for graceful fallback
 * @returns Event handler function for img.onerror
 */
export function handleImageError(event: Event): void {
  const img = event.target as HTMLImageElement;
  img.style.display = 'none';
}
