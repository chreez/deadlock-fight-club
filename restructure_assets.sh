#!/bin/bash

# Create directory structure
mkdir -p assets/heroes

# Process each hero directory directly
# Map directory names to hero names as we go

# Process each hero directory
for hero_dir in unprocessed-assets/*/; do
    # Skip if not a directory or if it's the guns folder
    [ ! -d "$hero_dir" ] && continue
    dir_name=$(basename "$hero_dir")
    [ "$dir_name" = "guns" ] && continue
    
    # Convert directory name to lowercase and replace spaces/special chars
    hero_name=$(echo "$dir_name" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g' | sed 's/&/and/g' | sed 's/[()]//g')
    
    # Special case adjustments
    case "$dir_name" in
        "Sinclair (Magician)") hero_name="sinclair" ;;
        "Grey Talon") hero_name="grey-talon" ;;
        "Mo & Krill") hero_name="mo-and-krill" ;;
        "Lady Geist") hero_name="lady-geist" ;;
    esac
    
    # Find the main _psd.png file (this should be the primary hero image)
    main_file=$(find "$hero_dir" -name "*_psd.png" ! -name "*_*_psd.png" | head -1)
    
    if [ -z "$main_file" ]; then
        echo "Warning: No main image found for $hero_name in $hero_dir"
        continue
    fi
    
    # Copy and rename to target structure
    target_file="assets/heroes/${hero_name}.png"
    cp "$main_file" "$target_file"
    echo "Copied: $main_file -> $target_file"
done

# Handle special cases (non-hero images in root)
if [ -f "unprocessed-assets/tier_1_boss_psd.png" ]; then
    cp "unprocessed-assets/tier_1_boss_psd.png" "assets/heroes/tier-1-boss.png"
    echo "Copied: tier_1_boss_psd.png -> assets/heroes/tier-1-boss.png"
fi

if [ -f "unprocessed-assets/Generic.png" ]; then
    cp "unprocessed-assets/Generic.png" "assets/heroes/generic.png"
    echo "Copied: Generic.png -> assets/heroes/generic.png"
fi

echo "Asset restructuring complete!"
echo "Total files in assets/heroes: $(ls -1 assets/heroes/*.png 2>/dev/null | wc -l)"