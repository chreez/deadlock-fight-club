#!/bin/bash

# Create directory structure
mkdir -p assets/items/spirit
mkdir -p assets/items/weapon
mkdir -p assets/items/vitality

# Process Spirit Items
echo "Processing Spirit Items..."
for item_file in "unprocessed-icons/Spirit Items/"*.png; do
    [ ! -f "$item_file" ] && continue
    
    # Get filename without path
    filename=$(basename "$item_file")
    
    # Convert from CamelCase to kebab-case
    # e.g., AmmoScavenger.png -> ammo-scavenger.png
    # e.g., DivinersKevlar.png -> diviners-kevlar.png
    kebab_name=$(echo "$filename" | sed 's/\([A-Z]\)/-\1/g' | sed 's/^-//' | tr '[:upper:]' '[:lower:]')
    
    # Copy to target location
    target_file="assets/items/spirit/$kebab_name"
    cp "$item_file" "$target_file"
    echo "Copied: $filename -> spirit/$kebab_name"
done

# Process Weapon Items
echo "Processing Weapon Items..."
for item_file in "unprocessed-icons/Weapon Items/"*.png; do
    [ ! -f "$item_file" ] && continue
    
    # Get filename without path
    filename=$(basename "$item_file")
    
    # Convert from CamelCase to kebab-case
    kebab_name=$(echo "$filename" | sed 's/\([A-Z]\)/-\1/g' | sed 's/^-//' | tr '[:upper:]' '[:lower:]')
    
    # Copy to target location
    target_file="assets/items/weapon/$kebab_name"
    cp "$item_file" "$target_file"
    echo "Copied: $filename -> weapon/$kebab_name"
done

# Process Vitality Items
echo "Processing Vitality Items..."
for item_file in "unprocessed-icons/Vitality Items/"*.png; do
    [ ! -f "$item_file" ] && continue
    
    # Get filename without path
    filename=$(basename "$item_file")
    
    # Convert from CamelCase to kebab-case
    kebab_name=$(echo "$filename" | sed 's/\([A-Z]\)/-\1/g' | sed 's/^-//' | tr '[:upper:]' '[:lower:]')
    
    # Copy to target location
    target_file="assets/items/vitality/$kebab_name"
    cp "$item_file" "$target_file"
    echo "Copied: $filename -> vitality/$kebab_name"
done

# Copy special icons from root of unprocessed-icons if they exist
if [ -f "unprocessed-icons/Souls.png" ]; then
    cp "unprocessed-icons/Souls.png" "assets/items/souls.png"
    echo "Copied: Souls.png -> items/souls.png"
fi

if [ -f "unprocessed-icons/Spirit.png" ]; then
    cp "unprocessed-icons/Spirit.png" "assets/items/spirit.png"
    echo "Copied: Spirit.png -> items/spirit.png"
fi

echo ""
echo "Item icon restructuring complete!"
echo "Spirit items: $(ls -1 assets/items/spirit/*.png 2>/dev/null | wc -l)"
echo "Weapon items: $(ls -1 assets/items/weapon/*.png 2>/dev/null | wc -l)"
echo "Vitality items: $(ls -1 assets/items/vitality/*.png 2>/dev/null | wc -l)"
echo "Special items: $(ls -1 assets/items/*.png 2>/dev/null | wc -l)"
echo "Total item icons: $(find assets/items -name "*.png" | wc -l)"