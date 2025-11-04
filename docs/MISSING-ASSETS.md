# Missing Assets - Download List

## Wiki URL Pattern
Hero Cards: `https://deadlock.wiki/images/[Hero_name]_card.png`
Items: `https://deadlock.wiki/images/[Item_name].png`

## Missing Items (from test output)

### Weapon Category
1. **Extra Ammo** → https://deadlock.wiki/images/Extended_Magazine.png
   - Database name: "Extra Ammo" → Wiki name: "Extended Magazine"
   - Save as: `public/assets/items/weapon/extra-ammo.png`

2. **Restorative Shot** → https://deadlock.wiki/images/Restorative_Shot.png
   - Save as: `public/assets/items/weapon/restorative-shot.png`

3. **Split Shot** → https://deadlock.wiki/images/Split_Shot.png
   - Save as: `public/assets/items/weapon/split-shot.png`

4. **Blood Tribute** → https://deadlock.wiki/images/Blood_Tribute.png
   - Save as: `public/assets/items/weapon/blood-tribute.png`

5. **Burst Fire (T3)** → https://deadlock.wiki/images/Burst_Fire.png
   - Save as: `public/assets/items/weapon/burst-fire-t3.png`

6. **Capacitor** → https://deadlock.wiki/images/Capacitor.png
   - Save as: `public/assets/items/weapon/capacitor.png`

7. **Siphon Bullets** → https://deadlock.wiki/images/Siphon_Bullets.png
   - Save as: `public/assets/items/weapon/siphon-bullets.png`

### Vitality Category
8. **Battle Vest** → https://deadlock.wiki/images/Battle_Vest.png
   - Save as: `public/assets/items/vitality/battle-vest.png`

9. **Guardian Ward** → https://deadlock.wiki/images/Guardian_Ward.png
   - Save as: `public/assets/items/vitality/guardian-ward.png`

10. **Spirit Shielding** → https://deadlock.wiki/images/Spirit_Shielding.png
    - Save as: `public/assets/items/vitality/spirit-shielding.png`

11. **Trophy Collector** → https://deadlock.wiki/images/Trophy_Collector.png
    - Save as: `public/assets/items/vitality/trophy-collector.png`

12. **Weapon Shielding** → https://deadlock.wiki/images/Weapon_Shielding.png
    - Save as: `public/assets/items/vitality/weapon-shielding.png`

13. **Bullet Resilience** → https://deadlock.wiki/images/Bullet_Resilience.png
    - Save as: `public/assets/items/vitality/bullet-resilience.png`

14. **Fury Trance** → https://deadlock.wiki/images/Fury_Trance.png
    - Save as: `public/assets/items/vitality/fury-trance.png`

15. **Healing Nova** → https://deadlock.wiki/images/Healing_Nova.png
    - Save as: `public/assets/items/vitality/healing-nova.png`

16. **Spirit Resilience** → https://deadlock.wiki/images/Spirit_Resilience.png
    - Save as: `public/assets/items/vitality/spirit-resilience.png`

17. **Warp Stone (V)** → https://deadlock.wiki/images/Warp_Stone.png
    - Database shows as vitality, wiki shows as tier 3
    - Save as: `public/assets/items/vitality/warp-stone-v.png`

18. **Cheat Death** → https://deadlock.wiki/images/Cheat_Death.png
    - Save as: `public/assets/items/vitality/cheat-death.png`

19. **Plated Armor** → https://deadlock.wiki/images/Plated_Armor.png
    - Save as: `public/assets/items/vitality/plated-armor.png`

20. **Vampiric Burst** → https://deadlock.wiki/images/Vampiric_Burst.png
    - Save as: `public/assets/items/vitality/vampiric-burst.png`

### Spirit Category
21. **Mystic Expansion** → https://deadlock.wiki/images/Mystic_Expansion.png
    - Save as: `public/assets/items/spirit/mystic-expansion.png`

22. **Rusted Barrel** → https://deadlock.wiki/images/Rusted_Barrel.png
    - Save as: `public/assets/items/spirit/rusted-barrel.png`

23. **Compress Cooldown** → https://deadlock.wiki/images/Compress_Cooldown.png
    - Save as: `public/assets/items/spirit/compress-cooldown.png`

24. **Quicksilver Reload** → https://deadlock.wiki/images/Quicksilver_Reload.png
    - Save as: `public/assets/items/spirit/quicksilver-reload.png`

25. **Spirit Sap** → https://deadlock.wiki/images/Spirit_Sap.png
    - Save as: `public/assets/items/spirit/spirit-sap.png`

26. **Disarming Hex** → https://deadlock.wiki/images/Disarming_Hex.png
    - Save as: `public/assets/items/spirit/disarming-hex.png`

27. **Greater Expansion** → https://deadlock.wiki/images/Greater_Expansion.png
    - Save as: `public/assets/items/spirit/greater-expansion.png`

28. **Silence Wave** → https://deadlock.wiki/images/Silence_Wave.png
    - Save as: `public/assets/items/spirit/silence-wave.png`

29. **Surge of Power** → https://deadlock.wiki/images/Surge_of_Power.png
    - Save as: `public/assets/items/spirit/surge-of-power.png`

30. **Arctic Blast** → https://deadlock.wiki/images/Arctic_Blast.png
    - Save as: `public/assets/items/spirit/arctic-blast.png`

## Download Script

```bash
# Run from project root
mkdir -p public/assets/items/{weapon,vitality,spirit}

# Weapon items
curl -o public/assets/items/weapon/extended-magazine.png https://deadlock.wiki/images/Extended_Magazine.png
curl -o public/assets/items/weapon/restorative-shot.png https://deadlock.wiki/images/Restorative_Shot.png
curl -o public/assets/items/weapon/split-shot.png https://deadlock.wiki/images/Split_Shot.png
curl -o public/assets/items/weapon/blood-tribute.png https://deadlock.wiki/images/Blood_Tribute.png
curl -o public/assets/items/weapon/burst-fire.png https://deadlock.wiki/images/Burst_Fire.png
curl -o public/assets/items/weapon/capacitor.png https://deadlock.wiki/images/Capacitor.png
curl -o public/assets/items/weapon/siphon-bullets.png https://deadlock.wiki/images/Siphon_Bullets.png

# Vitality items
curl -o public/assets/items/vitality/battle-vest.png https://deadlock.wiki/images/Battle_Vest.png
curl -o public/assets/items/vitality/guardian-ward.png https://deadlock.wiki/images/Guardian_Ward.png
curl -o public/assets/items/vitality/spirit-shielding.png https://deadlock.wiki/images/Spirit_Shielding.png
curl -o public/assets/items/vitality/trophy-collector.png https://deadlock.wiki/images/Trophy_Collector.png
curl -o public/assets/items/vitality/weapon-shielding.png https://deadlock.wiki/images/Weapon_Shielding.png
curl -o public/assets/items/vitality/bullet-resilience.png https://deadlock.wiki/images/Bullet_Resilience.png
curl -o public/assets/items/vitality/fury-trance.png https://deadlock.wiki/images/Fury_Trance.png
curl -o public/assets/items/vitality/healing-nova.png https://deadlock.wiki/images/Healing_Nova.png
curl -o public/assets/items/vitality/spirit-resilience.png https://deadlock.wiki/images/Spirit_Resilience.png
curl -o public/assets/items/vitality/warp-stone.png https://deadlock.wiki/images/Warp_Stone.png
curl -o public/assets/items/vitality/cheat-death.png https://deadlock.wiki/images/Cheat_Death.png
curl -o public/assets/items/vitality/plated-armor.png https://deadlock.wiki/images/Plated_Armor.png
curl -o public/assets/items/vitality/vampiric-burst.png https://deadlock.wiki/images/Vampiric_Burst.png

# Spirit items
curl -o public/assets/items/spirit/mystic-expansion.png https://deadlock.wiki/images/Mystic_Expansion.png
curl -o public/assets/items/spirit/rusted-barrel.png https://deadlock.wiki/images/Rusted_Barrel.png
curl -o public/assets/items/spirit/compress-cooldown.png https://deadlock.wiki/images/Compress_Cooldown.png
curl -o public/assets/items/spirit/quicksilver-reload.png https://deadlock.wiki/images/Quicksilver_Reload.png
curl -o public/assets/items/spirit/spirit-sap.png https://deadlock.wiki/images/Spirit_Sap.png
curl -o public/assets/items/spirit/disarming-hex.png https://deadlock.wiki/images/Disarming_Hex.png
curl -o public/assets/items/spirit/greater-expansion.png https://deadlock.wiki/images/Greater_Expansion.png
curl -o public/assets/items/spirit/silence-wave.png https://deadlock.wiki/images/Silence_Wave.png
curl -o public/assets/items/spirit/surge-of-power.png https://deadlock.wiki/images/Surge_of_Power.png
curl -o public/assets/items/spirit/arctic-blast.png https://deadlock.wiki/images/Arctic_Blast.png
```

## Notes
- 30 missing item assets identified
- All URLs follow pattern: `https://deadlock.wiki/images/[Item_name].png`
- Some items renamed in game (e.g., "Extra Ammo" → "Extended Magazine")
- Test results show placeholder fallback works for missing assets
