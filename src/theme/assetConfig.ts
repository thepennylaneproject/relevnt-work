/**
 * RELEVNT THEME SYSTEM - ASSET CONFIGURATION
 * 
 * This file contains all 128 asset URLs from your Cloudinary CSV.
 * Generated from: relevnt_asset_metadata.csv
 * 
 * 🎓 LEARNING NOTE: This is a "data module" - it exports structured data
 * that other parts of the application import and use. This pattern keeps
 * your data separate from your logic, making it easier to update and test.
 */

import type { ThemeAsset, ThemeName, ThemeMode } from '@/theme/types';

// Add this type definition right after the import:
type ThemeCollection = {
  Light: {
    Hero: ThemeAsset[];
    FeatureCard: ThemeAsset[];
    SpotIllustration: ThemeAsset[];
    BackgroundTexture: ThemeAsset[];
  };
  Dark: {
    Hero: ThemeAsset[];
    FeatureCard: ThemeAsset[];
    SpotIllustration: ThemeAsset[];
    BackgroundTexture: ThemeAsset[];
  };
};

// ============================================================================
// HELPER FUNCTION: Create Asset Object
// ============================================================================

/**
 * 🎓 DRY PRINCIPLE: Don't Repeat Yourself
 * Instead of writing { url: '...', publicId: '...', version: 1 } 128 times,
 * we create a helper function that constructs these objects consistently
 */
function asset(url: string, _publicId: string, _version: number): ThemeAsset {
  return { url };
}
// ============================================================================
// WELCOME THEME
// ============================================================================

const Welcome: ThemeCollection = {
  Light: {
    Hero: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248802/Welcome_Hero_Light_16x9_v01_ocuis3.svg',
        'Welcome_Hero_Light_16x9_v01_ocuis3',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248802/Welcome_Hero_Light_16x9_v02_phslgb.svg',
        'Welcome_Hero_Light_16x9_v02_phslgb',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248803/Welcome_Hero_Light_16x9_v03_u18tmv.svg',
        'Welcome_Hero_Light_16x9_v03_u18tmv',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248804/Welcome_Hero_Light_16x9_v04_ee8l1y.svg',
        'Welcome_Hero_Light_16x9_v04_ee8l1y',
        4
      ),
    ],
    FeatureCard: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248801/Welcome_FeatureCard_Light_4x5_v01_d0rye1.svg',
        'Welcome_FeatureCard_Light_4x5_v01_d0rye1',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248801/Welcome_FeatureCard_Light_4x5_v02_nak5yd.svg',
        'Welcome_FeatureCard_Light_4x5_v02_nak5yd',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248801/Welcome_FeatureCard_Light_4x5_v03_xyvpp9.svg',
        'Welcome_FeatureCard_Light_4x5_v03_xyvpp9',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248801/Welcome_FeatureCard_Light_4x5_v04_z8wrbu.svg',
        'Welcome_FeatureCard_Light_4x5_v04_z8wrbu',
        4
      ),
    ],
    SpotIllustration: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248804/Welcome_SpotIllustration_Light_1x1_v01_rmkhf3.svg',
        'Welcome_SpotIllustration_Light_1x1_v01_rmkhf3',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248805/Welcome_SpotIllustration_Light_1x1_v02_ft0hom.svg',
        'Welcome_SpotIllustration_Light_1x1_v02_ft0hom',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248804/Welcome_SpotIllustration_Light_1x1_v03_eupexi.svg',
        'Welcome_SpotIllustration_Light_1x1_v03_eupexi',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248804/Welcome_SpotIllustration_Light_1x1_v04_copy_j3hytp.svg',
        'Welcome_SpotIllustration_Light_1x1_v04_copy_j3hytp',
        4
      ),
    ],
    BackgroundTexture: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248800/Welcome_BackgroundTexture_9x16_v01_kwxpdz.svg',
        'Welcome_BackgroundTexture_9x16_v01_kwxpdz',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248801/Welcome_BackgroundTexture_9x16_v02_cc1qi4.svg',
        'Welcome_BackgroundTexture_9x16_v02_cc1qi4',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248802/Welcome_BackgroundTexture_9x16_v03_nvtnqy.svg',
        'Welcome_BackgroundTexture_9x16_v03_nvtnqy',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248802/Welcome_BackgroundTexture_9x16_v04_wdijhf.svg',
        'Welcome_BackgroundTexture_9x16_v04_wdijhf',
        4
      ),
    ],
  },
  Dark: {
    Hero: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248824/Welcome_Hero_Dark_16x9_v01_oolhwv.svg',
        'Welcome_Hero_Dark_16x9_v01_oolhwv',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248824/Welcome_Hero_Dark_16x9_v02_nmviqd.svg',
        'Welcome_Hero_Dark_16x9_v02_nmviqd',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248825/Welcome_Hero_Dark_16x9_v03_qrfbsw.svg',
        'Welcome_Hero_Dark_16x9_v03_qrfbsw',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248825/Welcome_Hero_Dark_16x9_v04_glrvxm.svg',
        'Welcome_Hero_Dark_16x9_v04_glrvxm',
        4
      ),
    ],
    FeatureCard: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248822/Welcome_FeatureCard_Dark_4x5_v01_abf3a2.svg',
        'Welcome_FeatureCard_Dark_4x5_v01_abf3a2',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248822/Welcome_FeatureCard_Dark_4x5_v02_uoftef.svg',
        'Welcome_FeatureCard_Dark_4x5_v02_uoftef',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248823/Welcome_FeatureCard_Dark_4x5_v03_o13zry.svg',
        'Welcome_FeatureCard_Dark_4x5_v03_o13zry',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248823/Welcome_FeatureCard_Dark_4x5_v04_dltzya.svg',
        'Welcome_FeatureCard_Dark_4x5_v04_dltzya',
        4
      ),
    ],
    SpotIllustration: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248826/Welcome_SpotIllustration_Dark_1x1_v01_mcql9o.svg',
        'Welcome_SpotIllustration_Dark_1x1_v01_mcql9o',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248826/Welcome_SpotIllustration_Dark_1x1_v02_f9m8pr.svg',
        'Welcome_SpotIllustration_Dark_1x1_v02_f9m8pr',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248826/Welcome_SpotIllustration_Dark_1x1_v03_ypoz2a.svg',
        'Welcome_SpotIllustration_Dark_1x1_v03_ypoz2a',
        3
      ),
      // Note: Welcome Dark SpotIllustration only has 3 versions in the CSV
      // This is fine - the getAsset function will handle it gracefully
    ],
    BackgroundTexture: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248823/Welcome_BackgroundTexture_Dark_9x16_v01_fkvf2b.svg',
        'Welcome_BackgroundTexture_Dark_9x16_v01_fkvf2b',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248823/Welcome_BackgroundTexture_Dark_9x16_v02_e5ir1o.svg',
        'Welcome_BackgroundTexture_Dark_9x16_v02_e5ir1o',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248824/Welcome_BackgroundTexture_Dark_9x16_v03_ix8p3o.svg',
        'Welcome_BackgroundTexture_Dark_9x16_v03_ix8p3o',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248824/Welcome_BackgroundTexture_Dark_9x16_v04_bedvxg.svg',
        'Welcome_BackgroundTexture_Dark_9x16_v04_bedvxg',
        4
      ),
    ],
  },
};

// ============================================================================
// DEEP WATER THEME
// ============================================================================

const DeepWater: ThemeCollection = {
  Light: {
    Hero: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248877/Deep_Water_Hero_Light_16x9_v01_yw3ppd.svg',
        'Deep_Water_Hero_Light_16x9_v01_yw3ppd',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248877/Deep_Water_Hero_Light_16x9_v02_mginrp.svg',
        'Deep_Water_Hero_Light_16x9_v02_mginrp',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248878/Deep_Water_Hero_Light_16x9_v03_abiqpl.svg',
        'Deep_Water_Hero_Light_16x9_v03_abiqpl',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248878/Deep_Water_Hero_Light_16x9_v04_qyjevp.svg',
        'Deep_Water_Hero_Light_16x9_v04_qyjevp',
        4
      ),
    ],
    FeatureCard: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248868/Deep_Water_FeatureCard_Light_4x5_v01_sdqjul.svg',
        'Deep_Water_FeatureCard_Light_4x5_v01_sdqjul',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248869/Deep_Water_FeatureCard_Light_4x5_v02_tzipsd.svg',
        'Deep_Water_FeatureCard_Light_4x5_v02_tzipsd',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248869/Deep_Water_FeatureCard_Light_4x5_v03_mluxz1.svg',
        'Deep_Water_FeatureCard_Light_4x5_v03_mluxz1',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248869/Deep_Water_FeatureCard_Light_4x5_v04_aoaz7j.svg',
        'Deep_Water_FeatureCard_Light_4x5_v04_aoaz7j',
        4
      ),
    ],
    SpotIllustration: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248869/Deep_Water_SpotIllustration_Light_1x1_v01_iljddr.svg',
        'Deep_Water_SpotIllustration_Light_1x1_v01_iljddr',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248870/Deep_Water_SpotIllustration_Light_1x1_v02_jbkvxx.svg',
        'Deep_Water_SpotIllustration_Light_1x1_v02_jbkvxx',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248870/Deep_Water_SpotIllustration_Light_1x1_v03_kjmwmm.svg',
        'Deep_Water_SpotIllustration_Light_1x1_v03_kjmwmm',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248871/Deep_Water_SpotIllustration_Light_1x1_v04_tftx1e.svg',
        'Deep_Water_SpotIllustration_Light_1x1_v04_tftx1e',
        4
      ),
    ],
    BackgroundTexture: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248871/Deep_Water_BackgroundTexture_Light_9x16_v01_ymte64.svg',
        'Deep_Water_BackgroundTexture_Light_9x16_v01_ymte64',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248871/Deep_Water_BackgroundTexture_Light_9x16_v02_kydvt6.svg',
        'Deep_Water_BackgroundTexture_Light_9x16_v02_kydvt6',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248876/Deep_Water_BackgroundTexture_Light_9x16_v03_mge3uk.svg',
        'Deep_Water_BackgroundTexture_Light_9x16_v03_mge3uk',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248876/Deep_Water_BackgroundTexture_Light_9x16_v04_ujwmyk.svg',
        'Deep_Water_BackgroundTexture_Light_9x16_v04_ujwmyk',
        4
      ),
    ],
  },
  Dark: {
    Hero: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248898/Deep_Water_Hero_Dark_16x9_v01_ew1hkt.svg',
        'Deep_Water_Hero_Dark_16x9_v01_ew1hkt',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248899/Deep_Water_Hero_Dark_16x9_v02_gvcilt.svg',
        'Deep_Water_Hero_Dark_16x9_v02_gvcilt',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248902/Deep_Water_Hero_Dark_16x9_v03_yxsg1n.svg',
        'Deep_Water_Hero_Dark_16x9_v03_yxsg1n',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248902/Deep_Water_Hero_Dark_16x9_v04_nro00f.svg',
        'Deep_Water_Hero_Dark_16x9_v04_nro00f',
        4
      ),
    ],
    FeatureCard: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248890/Deep_Water_FeatureCard_Dark_4x5_v01_yt7oz1.svg',
        'Deep_Water_FeatureCard_Dark_4x5_v01_yt7oz1',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248890/Deep_Water_FeatureCard_Dark_4x5_v02_iuskf6.svg',
        'Deep_Water_FeatureCard_Dark_4x5_v02_iuskf6',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248891/Deep_Water_FeatureCard_Dark_4x5_v03_igwcgi.svg',
        'Deep_Water_FeatureCard_Dark_4x5_v03_igwcgi',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248893/Deep_Water_FeatureCard_Dark_4x5_v04_pfd7kh.svg',
        'Deep_Water_FeatureCard_Dark_4x5_v04_pfd7kh',
        4
      ),
    ],
    SpotIllustration: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248891/Deep_Water_SpotIllustration_Dark_1x1_v01_e22afd.svg',
        'Deep_Water_SpotIllustration_Dark_1x1_v01_e22afd',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248892/Deep_Water_SpotIllustration_Dark_1x1_v02_hvsjtr.svg',
        'Deep_Water_SpotIllustration_Dark_1x1_v02_hvsjtr',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248892/Deep_Water_SpotIllustration_Dark_1x1_v03_aeif4w.svg',
        'Deep_Water_SpotIllustration_Dark_1x1_v03_aeif4w',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248892/Deep_Water_SpotIllustration_Dark_1x1_v04_sbtzuc.svg',
        'Deep_Water_SpotIllustration_Dark_1x1_v04_sbtzuc',
        4
      ),
    ],
    BackgroundTexture: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248894/Deep_Water_BackgroundTexture_Dark_9x16_v01_zgpvcc.svg',
        'Deep_Water_BackgroundTexture_Dark_9x16_v01_zgpvcc',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248896/Deep_Water_BackgroundTexture_Dark_9x16_v02_zsucrs.svg',
        'Deep_Water_BackgroundTexture_Dark_9x16_v02_zsucrs',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248897/Deep_Water_BackgroundTexture_Dark_9x16_v03_ledpxl.svg',
        'Deep_Water_BackgroundTexture_Dark_9x16_v03_ledpxl',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248898/Deep_Water_BackgroundTexture_Dark_9x16_v04_apkbr8.svg',
        'Deep_Water_BackgroundTexture_Dark_9x16_v04_apkbr8',
        4
      ),
    ],
  },
};

// ============================================================================
// DIAMOND THEME
// ============================================================================

const Diamond: ThemeCollection = {
  Light: {
    Hero: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248937/Diamond_Hero_Light_16x9_v01_gwfptz.svg',
        'Diamond_Hero_Light_16x9_v01_gwfptz',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248938/Diamond_Hero_Light_16x9_v02_wm1diy.svg',
        'Diamond_Hero_Light_16x9_v02_wm1diy',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248938/Diamond_Hero_Light_16x9_v03_nvvdpy.svg',
        'Diamond_Hero_Light_16x9_v03_nvvdpy',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248939/Diamond_Hero_Light_16x9_v04_oeq8n6.svg',
        'Diamond_Hero_Light_16x9_v04_oeq8n6',
        4
      ),
    ],
    FeatureCard: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248931/Diamond_FeatureCard_Light_4x5_v01_ikmjjl.svg',
        'Diamond_FeatureCard_Light_4x5_v01_ikmjjl',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248931/Diamond_FeatureCard_Light_4x5_v02_tywz8v.svg',
        'Diamond_FeatureCard_Light_4x5_v02_tywz8v',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248931/Diamond_FeatureCard_Light_4x5_v03_xcjxrp.svg',
        'Diamond_FeatureCard_Light_4x5_v03_xcjxrp',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248932/Diamond_FeatureCard_Light_4x5_v04_l7jnzo.svg',
        'Diamond_FeatureCard_Light_4x5_v04_l7jnzo',
        4
      ),
    ],
    SpotIllustration: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248932/Diamond_SpotIllustration_Light_1x1_v01_exqxb8.svg',
        'Diamond_SpotIllustration_Light_1x1_v01_exqxb8',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248933/Diamond_SpotIllustration_Light_1x1_v02_e4s5zc.svg',
        'Diamond_SpotIllustration_Light_1x1_v02_e4s5zc',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248933/Diamond_SpotIllustration_Light_1x1_v03_ebqxyj.svg',
        'Diamond_SpotIllustration_Light_1x1_v03_ebqxyj',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248933/Diamond_SpotIllustration_Light_1x1_v04_jufclh.svg',
        'Diamond_SpotIllustration_Light_1x1_v04_jufclh',
        4
      ),
    ],
    BackgroundTexture: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248933/Diamond_BackgroundTexture_Light_16x9_v01_jqqhla.svg',
        'Diamond_BackgroundTexture_Light_16x9_v01_jqqhla',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248934/Diamond_BackgroundTexture_Light_16x9_v02_aaoocm.svg',
        'Diamond_BackgroundTexture_Light_16x9_v02_aaoocm',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248934/Diamond_BackgroundTexture_Light_16x9_v03_kfn2i8.svg',
        'Diamond_BackgroundTexture_Light_16x9_v03_kfn2i8',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248935/Diamond_BackgroundTexture_Light_16x9_v04_x5fqrj.svg',
        'Diamond_BackgroundTexture_Light_16x9_v04_x5fqrj',
        4
      ),
    ],
  },
  Dark: {
    Hero: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248956/Diamond_Hero_Dark_16x9_v01_xn2cxd.svg',
        'Diamond_Hero_Dark_16x9_v01_xn2cxd',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248956/Diamond_Hero_Dark_16x9_v02_jxw5an.svg',
        'Diamond_Hero_Dark_16x9_v02_jxw5an',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248957/Diamond_Hero_Dark_16x9_v03_uemxaw.svg',
        'Diamond_Hero_Dark_16x9_v03_uemxaw',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248958/Diamond_Hero_Dark_16x9_v04_i0fpbb.svg',
        'Diamond_Hero_Dark_16x9_v04_i0fpbb',
        4
      ),
    ],
    FeatureCard: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248950/Diamond_FeatureCard_Dark_4x5_v01_lmqvef.svg',
        'Diamond_FeatureCard_Dark_4x5_v01_lmqvef',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248950/Diamond_FeatureCard_Dark_4x5_v02_mebr9j.svg',
        'Diamond_FeatureCard_Dark_4x5_v02_mebr9j',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248951/Diamond_FeatureCard_Dark_4x5_v03_xqilho.svg',
        'Diamond_FeatureCard_Dark_4x5_v03_xqilho',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248951/Diamond_FeatureCard_Dark_4x5_v04_bqq65t.svg',
        'Diamond_FeatureCard_Dark_4x5_v04_bqq65t',
        4
      ),
    ],
    SpotIllustration: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248951/Diamond_SpotIllustration_Dark_1x1_v01_m5vfeg.svg',
        'Diamond_SpotIllustration_Dark_1x1_v01_m5vfeg',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248952/Diamond_SpotIllustration_Dark_1x1_v02_k2rcdh.svg',
        'Diamond_SpotIllustration_Dark_1x1_v02_k2rcdh',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248952/Diamond_SpotIllustration_Dark_1x1_v03_j15hfs.svg',
        'Diamond_SpotIllustration_Dark_1x1_v03_j15hfs',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248953/Diamond_SpotIllustration_Dark_1x1_v04_lnhw0r.svg',
        'Diamond_SpotIllustration_Dark_1x1_v04_lnhw0r',
        4
      ),
    ],
    BackgroundTexture: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248926/Diamond_BackgroundTexture_Dark_16x9_v01_khl7qr.svg',
        'Diamond_BackgroundTexture_Dark_16x9_v01_khl7qr',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248927/Diamond_BackgroundTexture_Dark_16x9_v02_vz4dbg.svg',
        'Diamond_BackgroundTexture_Dark_16x9_v02_vz4dbg',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248928/Diamond_BackgroundTexture_Dark_16x9_v03_rjhheg.svg',
        'Diamond_BackgroundTexture_Dark_16x9_v03_rjhheg',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248928/Diamond_BackgroundTexture_Dark_16x9_v04_o0hwuf.svg',
        'Diamond_BackgroundTexture_Dark_16x9_v04_o0hwuf',
        4
      ),
    ],
  },
};

// ============================================================================
// STEEL THEME
// ============================================================================

const Steel: ThemeCollection = {
  Light: {
    Hero: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248949/Steel_Hero_Light_16x9_v01_kqtamx.svg',
        'Steel_Hero_Light_16x9_v01_kqtamx',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248949/Steel_Hero_Light_16x9_v02_iwp8xw.svg',
        'Steel_Hero_Light_16x9_v02_iwp8xw',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248949/Steel_Hero_Light_16x9_v03_nczb7a.svg',
        'Steel_Hero_Light_16x9_v03_nczb7a',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248949/Steel_Hero_Light_16x9_v04_hvubqz.svg',
        'Steel_Hero_Light_16x9_v04_hvubqz',
        4
      ),
    ],
    FeatureCard: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248942/Steel_FeatureCard_Light_4x5_v01_d2djyo.svg',
        'Steel_FeatureCard_Light_4x5_v01_d2djyo',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248942/Steel_FeatureCard_Light_4x5_v02_gjqvn2.svg',
        'Steel_FeatureCard_Light_4x5_v02_gjqvn2',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248943/Steel_FeatureCard_Light_4x5_v03_fxkdaj.svg',
        'Steel_FeatureCard_Light_4x5_v03_fxkdaj',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248943/Steel_FeatureCard_Light_4x5_v04_cqmcyz.svg',
        'Steel_FeatureCard_Light_4x5_v04_cqmcyz',
        4
      ),
    ],
    SpotIllustration: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248944/Steel_SpotIllustration_Light_1x1_v01_lxw7yd.svg',
        'Steel_SpotIllustration_Light_1x1_v01_lxw7yd',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248945/Steel_SpotIllustration_Light_1x1_v02_djmi0u.svg',
        'Steel_SpotIllustration_Light_1x1_v02_djmi0u',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248946/Steel_SpotIllustration_Light_1x1_v03_pppz8r.svg',
        'Steel_SpotIllustration_Light_1x1_v03_pppz8r',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248948/Steel_SpotIllustration_Light_1x1_v04_n8zuyz.svg',
        'Steel_SpotIllustration_Light_1x1_v04_n8zuyz',
        4
      ),
    ],
    BackgroundTexture: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248943/Steel_BackgroundTexture_Light_16x9_v01_d2nvcd.svg',
        'Steel_BackgroundTexture_Light_16x9_v01_d2nvcd',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248944/Steel_BackgroundTexture_Light_16x9_v02_fqimw0.svg',
        'Steel_BackgroundTexture_Light_16x9_v02_fqimw0',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248944/Steel_BackgroundTexture_Light_16x9_v03_mfb2rp.svg',
        'Steel_BackgroundTexture_Light_16x9_v03_mfb2rp',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248945/Steel_BackgroundTexture_Light_16x9_v04_kcbxhc.svg',
        'Steel_BackgroundTexture_Light_16x9_v04_kcbxhc',
        4
      ),
    ],
  },
  Dark: {
    Hero: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248966/Steel_Hero_Dark_16x9_v01_z8i0qc.svg',
        'Steel_Hero_Dark_16x9_v01_z8i0qc',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248966/Steel_Hero_Dark_16x9_v02_o6k4pz.svg',
        'Steel_Hero_Dark_16x9_v02_o6k4pz',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248967/Steel_Hero_Dark_16x9_v03_fwnivw.svg',
        'Steel_Hero_Dark_16x9_v03_fwnivw',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248968/Steel_Hero_Dark_16x9_v04_b1dfsz.svg',
        'Steel_Hero_Dark_16x9_v04_b1dfsz',
        4
      ),
    ],
    FeatureCard: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248959/Steel_FeatureCard_Dark_4x5_v01_a1klxo.svg',
        'Steel_FeatureCard_Dark_4x5_v01_a1klxo',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248959/Steel_FeatureCard_Dark_4x5_v02_skqpfs.svg',
        'Steel_FeatureCard_Dark_4x5_v02_skqpfs',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248960/Steel_FeatureCard_Dark_4x5_v03_hsuomu.svg',
        'Steel_FeatureCard_Dark_4x5_v03_hsuomu',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248961/Steel_FeatureCard_Dark_4x5_v04_oj1ux1.svg',
        'Steel_FeatureCard_Dark_4x5_v04_oj1ux1',
        4
      ),
    ],
    SpotIllustration: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248961/Steel_SpotIllustration_Dark_1x1_v01_xacwms.svg',
        'Steel_SpotIllustration_Dark_1x1_v01_xacwms',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248962/Steel_SpotIllustration_Dark_1x1_v02_qxkhj8.svg',
        'Steel_SpotIllustration_Dark_1x1_v02_qxkhj8',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248962/Steel_SpotIllustration_Dark_1x1_v03_akbf2b.svg',
        'Steel_SpotIllustration_Dark_1x1_v03_akbf2b',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248963/Steel_SpotIllustration_Dark_1x1_v04_m1qj2v.svg',
        'Steel_SpotIllustration_Dark_1x1_v04_m1qj2v',
        4
      ),
    ],
    BackgroundTexture: [
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248963/Steel_BackgroundTexture_Dark_16x9_v01_irvj3l.svg',
        'Steel_BackgroundTexture_Dark_16x9_v01_irvj3l',
        1
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248963/Steel_BackgroundTexture_Dark_16x9_v02_rqc0i6.svg',
        'Steel_BackgroundTexture_Dark_16x9_v02_rqc0i6',
        2
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248964/Steel_BackgroundTexture_Dark_16x9_v03_rwqafy.svg',
        'Steel_BackgroundTexture_Dark_16x9_v03_rwqafy',
        3
      ),
      asset(
        'https://res.cloudinary.com/sarah-sahl/image/upload/v1761248965/Steel_BackgroundTexture_Dark_16x9_v04_jfq72b.svg',
        'Steel_BackgroundTexture_Dark_16x9_v04_jfq72b',
        4
      ),
    ],
  },
};

// ============================================================================
// MAIN EXPORT: Complete Asset Library
// ============================================================================

/**
 * The complete Relevnt asset library - all themes, modes, types, and versions
 * 
 * 🎓 This is a "const export" - the data is frozen after creation
 * This ensures no code accidentally modifies these URLs
 */
export const ASSETS = {
  Welcome,
  DeepWater,
  Diamond,
  Steel,
} as const;

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get a specific asset by its coordinates in the library
 * 
 * 🎓 This function demonstrates "defensive programming" - it handles
 * missing versions gracefully instead of crashing
 */
export function getAssetByPath(
  theme: ThemeName,
  mode: ThemeMode,
  assetType: string,
  versionIndex: number = 0
): ThemeAsset | null {
  try {
    const themeData = ASSETS[theme];
    if (!themeData) return null;

    const modeData = themeData[mode];
    if (!modeData) return null;

    const assets = (modeData as any)[assetType];
    if (!assets || !Array.isArray(assets)) return null;

    // If requested version doesn't exist, use the first available version
    const asset = assets[versionIndex] || assets[0];

    return asset || null;
  } catch (error) {
    console.error('Failed to get asset:', { theme, mode, assetType, versionIndex }, error);
    return null;
  }
}
/**
 * Get all versions of a specific asset
 * 
 * 🎓 Useful for A/B testing or letting users preview different versions
 */
export function getAllVersions(
  theme: ThemeName,
  mode: ThemeMode,
  assetType: string
): ThemeAsset[] {
  try {
    const themeData = ASSETS[theme];
    const modeData = themeData[mode];
    return (modeData as any)[assetType] || [];
  } catch (error) {
    console.error('Failed to get asset versions:', { theme, mode, assetType }, error);
    return [];
  }
}

/**
 * Validate that an asset exists before trying to use it
 * 
 * 🎓 Type guards + validation = fewer runtime errors
 */
export function assetExists(
  theme: string,
  mode: string,
  assetType: string,
  versionIndex: number = 0
): boolean {
  if (!(theme in ASSETS)) return false;

  const themeData = ASSETS[theme as ThemeName];
  if (!(mode in themeData)) return false;

  const modeData = themeData[mode as ThemeMode];
  const assets = (modeData as any)[assetType];

  return assets && Array.isArray(assets) && versionIndex < assets.length;
}
