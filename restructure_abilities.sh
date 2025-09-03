#!/bin/bash

# Create directory structure
mkdir -p assets/abilities

# Process each hero's ability icons
for hero_dir in "unprocessed-icons/Hero Abilities "/*; do
    # Skip if not a directory
    [ ! -d "$hero_dir" ] && continue
    
    # Get hero name from directory
    dir_name=$(basename "$hero_dir")
    
    # Convert directory name to lowercase and replace spaces/special chars
    hero_name=$(echo "$dir_name" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g' | sed 's/&/and/g' | sed 's/[()]//g')
    
    # Special case adjustments to match the hero naming convention
    case "$dir_name" in
        "Sinclair (Magician)") hero_name="sinclair" ;;
        "Grey Talon") hero_name="grey-talon" ;;
        "Mo & Krill") hero_name="mo-and-krill" ;;
        "Lady Geist") hero_name="lady-geist" ;;
    esac
    
    # Create hero-specific ability directory
    mkdir -p "assets/abilities/$hero_name"
    
    # Copy all ability icons for this hero
    for ability_file in "$hero_dir"/*.png; do
        [ ! -f "$ability_file" ] && continue
        
        # Get the ability name from the file
        filename=$(basename "$ability_file")
        
        # Remove the internal hero prefix and _psd.png suffix to get ability name
        # e.g., bull_charge_psd.png -> charge.png
        # e.g., synth_barrage_psd.png -> barrage.png
        
        # First, identify the internal hero prefix
        case "$dir_name" in
            "Abrams") prefix="bull_" ;;
            "Bebop") prefix="bebop_" ;;
            "Calico") prefix="nano_" ;;
            "Dynamo") prefix="sumo_" ;;
            "Grey Talon") prefix="archer_" ;;
            "Haze") prefix="haze_" ;;
            "Holliday") prefix="astro_" ;;
            "Infernus") prefix="inferno_" ;;
            "Ivy") prefix="tengu_" ;;
            "Kelvin") prefix="kelvin_" ;;
            "Lady Geist") prefix="spectre_" ;;
            "Lash") prefix="lash_" ;;
            "McGinnis") prefix="engineer_" ;;
            "Mirage") prefix="mirage_" ;;
            "Mo & Krill") prefix="digger_" ;;
            "Paradox") prefix="chrono_" ;;
            "Pocket") prefix="synth_" ;;
            "Raven") prefix="operative_" ;;
            "Seven") prefix="gigawatt_" ;;
            "Shiv") prefix="shiv_" ;;
            "Sinclair (Magician)") prefix="magician_" ;;
            "Vindicta") prefix="hornet_" ;;
            "Viscous") prefix="viscous_" ;;
            "Vyper") prefix="viper_" ;;
            "Warden") prefix="warden_" ;;
            "Wraith") prefix="wraith_" ;;
            "Yamato") prefix="yamato_" ;;
            *) 
                # For Kelvin and others without consistent prefix, try to extract from filename
                prefix=""
                ;;
        esac
        
        # Clean the ability name
        if [ -n "$prefix" ]; then
            # Remove the prefix if it exists
            ability_name=${filename#$prefix}
        else
            # For files without known prefix (like ice_beam_psd.png for Kelvin)
            ability_name=$filename
        fi
        
        # Remove _psd.png suffix
        ability_name=${ability_name%_psd.png}
        
        # Add .png extension
        ability_name="${ability_name}.png"
        
        # Copy to target location
        target_file="assets/abilities/$hero_name/$ability_name"
        cp "$ability_file" "$target_file"
        echo "Copied: $ability_file -> $target_file"
    done
done

echo "Ability icon restructuring complete!"
echo "Heroes with abilities: $(ls -1 assets/abilities/ | wc -l)"
echo "Total ability icons: $(find assets/abilities -name "*.png" | wc -l)"