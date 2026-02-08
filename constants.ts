export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  hoverImage?: string;
  description: string;
  notes?: {
    top: string;
    heart: string;
    base: string;
  };
  details?: {
    sillage: number; // 0-100
    longevity: number; // 0-100
  };
  isLimited?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "midnight-flame",
    name: "Midnight Flame",
    tagline: "Ahumado • Intenso",
    price: 240.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9NOLSxQo3CMZobu8j1GgFnM-EsH1hD-lbFDdwoNJoqKNrPhkJ4E91fxKFVVEGUlCz9rtnOBOkmvigpzJcySt888MPzgsLUBhLYzK4IW4xEUxRWH6IMjBWBuoyo3w0aAsUjq23_xt68IaGcAYRdHDv4EgRaktQQlYS8uqK8ygEs6IdpUBLUOjQQ1UWUX2T6KnGv4IaTxDQiXSoSuoGCRNlydVpsYZX2rlWEZ4uQts55DC2YErENKKThVsE_p9xPDQ1aab7nfb6fwSm",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiC8IGlT7bomukFJRt0iUktw4CkOEgewVdJYSa65ZE0j9ScRf_dEZ8eYdSAYDIslnmbJJBuJNvtZikV3fqETFE25FWfE5Fqfk4juYAyY0H-GrgCUbcL9pD94bA07x8bFXBS7q8YKi-2dhh-nGOXruQZ9QdgMrNmNCtmmKo4yLLKFW_5dyafOZBdtfSOSYnEI_nN_yl8LP6tCKiUbU_MwqAdjbiec9UNYn2RA0yGGWmkbDVYIp-QTVrH_qU3QvrkdkA-TGq_7uoFakW",
    description: "Una danza cinematográfica de sombra y calor. Este aroma captura la esencia de una brasa parpadeante en lo profundo de la noche, mezclando oud raro con la dulzura de la vainilla y el toque del azafrán.",
    notes: {
      top: "Azafrán, Bergamota, Pimienta Rosa",
      heart: "Rosa Negra, Madera de Ámbar, Pachulí",
      base: "Oud, Vainilla, Incienso Ardiente, Cuero"
    },
    details: {
      sillage: 80,
      longevity: 95
    },
    isLimited: true
  },
  {
    id: "crimson-essence",
    name: "Crimson Essence",
    tagline: "Especiado • Audaz",
    price: 285.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBr6U3gsChza_w8UodkRQnGq7uFBwFHGy2z9umlPIvNUhziH_MHUFTX0A0XmzDEN2mKxydOgGCxRRdiSA9GTzBfvbQ4qOgelKl8yfjCj_-u-r6qyRw6MjkQDLInndSv2CmXHEviOZudp36af2azE6Laqe8jCgq1_shHMeSrOvpQEA2yfqH9WvIXrQ3z_anb_08BVH45qsO-iMHv36ztyt4oxHyXuCaF0T3Hl9SmHL6tUINFAEYx4YXV2XtUQZDeDbRIBYzTzLlpoUf2",
    description: "El sensual azafrán se encuentra con las profundidades aterciopeladas de la rosa damascena, entrelazado con madera de ámbar carbonizada para un final audaz y especiado.",
  },
  {
    id: "midnight-ember",
    name: "Midnight Ember",
    tagline: "Misterioso • Oscuro",
    price: 220.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYF31IfHMYP3uUGyZNakNBseU_qeCsKUcuYTYa5wZKNgoIQjqZB2ZDMa7elDyKj3p0h7jFVXidKgFaaHku_oaY4jIq3Yp-k-HPog1pTrgHs7z5EL_FUQZf4isitsSXdWAF8-_ISVrc5SdBgE4GseH26dHFxFDWYVDprHJ0nilnmKXBFauCm7vjSOcUZHpc74W9WI9-PoH99G1bIvOrWituJOv0Z7Aooo7GbLnl09RSCDi9vZ81Dzly-jdFXX27YqxMJX170UabtiLZ",
    description: "Humo de incienso arremolinándose a través de bosques antiguos, anclado por pachulí y suavizado por un susurro de vainilla.",
  },
  {
    id: "eternal-ember",
    name: "Eternal Ember",
    tagline: "Amaderado • Especiado",
    price: 245.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXVeUAcFhOjyOVawEca5GwYElPPW9tn9HJyzKpijYRAGc7dKniRIPs6U8jJ7DoPmuVQi46h-abVYgkomFO1Y4P61ZcFSYhl7qK9iyQsSIoH-rWllIkpets1WKpKKtx5AK0qZCd_88QYLSJF7HUabXpqSRXwNZzBfiL6m8HJkhrP_AhzTi7te2RwEReO0tw6VEO_o2o5HfnLLYtb-qHbONhsH1lKTVjkeBhwdEYsMT0MdK1LjVoW-REgjeUY4PxGHVZwt5pTgwKQs95",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiC8IGlT7bomukFJRt0iUktw4CkOEgewVdJYSa65ZE0j9ScRf_dEZ8eYdSAYDIslnmbJJBuJNvtZikV3fqETFE25FWfE5Fqfk4juYAyY0H-GrgCUbcL9pD94bA07x8bFXBS7q8YKi-2dhh-nGOXruQZ9QdgMrNmNCtmmKo4yLLKFW_5dyafOZBdtfSOSYnEI_nN_yl8LP6tCKiUbU_MwqAdjbiec9UNYn2RA0yGGWmkbDVYIp-QTVrH_qU3QvrkdkA-TGq_7uoFakW",
    description: "Una chispa atemporal que se niega a desvanecerse.",
    isLimited: true
  },
  {
    id: "velvet-smoke",
    name: "Velvet Smoke",
    tagline: "Floral • Oriental",
    price: 190.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCymb50FCry0CV6yilqHWCGDJLqQM5K705Pjv87YEZg8urveFxvYUMKJeF2zzBNqgBQjj55r9f-SFlooHmK6c7Y5QauNgzaOeBLtdivYnbG7xMHT6p4Z4zuM7tFuMp6--PSnCqswceuGfwX_Ufb07ag2Gxh7sPTUoTDp-_7b6IAUvCXQv3cY6FbUAWihUyQR2fMKr2JaZH5Nbz_ZGs1nLxlS7mepJkYprADttQa7p_ZtHwLWRMM8Aqzcm4fqBnGJSZqeIZpcKXEHhwd",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWKSBMMJGGGj_LSYJuF8RmvnBsu3J3f-FvzKUbbKz48Gw1w20h-cOhhpyQWb4dDjkpfdoonX-6CU-IGUVW-2R93Js92qalTpeHDr0Gq1VhPlXvKQeo45knM6MlE66_UKMOydmFZD26LrSl6pSXg-4DxHFVBclbZ-FoSYtzO-yz5TcnZfSDDmPqC0T7OfpTkrbQABjwdTocLy3gQVGPCuHDxH9HbDx582W6dUaDjfYDv44kCMo3gCLrm7eb7kfvBcQ08WZvhFDLupzt",
    description: "Pétalos suaves envueltos en un velo de humo místico.",
  },
  {
    id: "crimson-oud",
    name: "Crimson Oud",
    tagline: "Intenso • Terroso",
    price: 320.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW8U7GCtJESAPRND_d59gBEn-28OxLvs_L8XpjPQZpViHem9A6gkEa3yV0r1Q6We_WqLs97iB9wVvhMVlEGxMIfHsXrsG7BDnzhU-ccNP7eKXX7PrrGjoTejZOKj_RNjwF3vo1n2Qw2mkZUSo7JdlyRbpXVbuhx5CXfUAWfvRfux4VBnJd0VRIplY0CIldYJbPR82Ijjx87lTZCGDcIZkUNlaBPpH3t9l0YUgUw8BeAD1htZ1RzjUwOEKEkMglLwdkkxweG44S7Skj",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDP7GrX8dsGEBkBJvO7zxaWpfgD7wS795hUr1Ldm6t-PPTBprtLbn77SC85Ie6dtqomV0B53Zm0AeTmExDMiEzuHgy2wyl5qHceOqkKHiw-hurfb30Zp9ZbJzbAC2NwAcARyqEWTvb5bpELF36WusqAUbiquc9xtjrauvWzCKXXZrqy3nMV1bluxGWJICrZ1gsogdO-pWd4l2ldT_OR1FHX3tzrgfaq6rVCV7hFKJSyptF1YGE5QCb0HBdzHnUob9tfCzqiGoZUX77_",
    description: "Un oud profundo y resinoso con destellos de brillantes especias rojas.",
  },
  {
    id: "midnight-resin",
    name: "Midnight Resin",
    tagline: "Ahumado • Oscuro",
    price: 285.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBu7PWMeLY46HlLl5DTGuLFoxndgyTVft_8I9ZYIhup4Fbj7Zov6x-UKi586UnDRZI6_ki09mxCX2uN2EtHby4d7F87mfvi9cxg1MWtnNK7arn-MsJuddrY8kI1SeTWFFxMrJtDFzegMzPv4lrOsC7lyy5dpfXcU5vNBqQBFy7fUCwUrxM_Du5Hjz3oi5itAV4t6WqNuuAyYiSfI2zHagGdUHzFXKdGmWa6cj4lTYdmj0pG_7IE-QhhaUfzYUifVGfa8D0WE32jzkW-",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBotpsP-M8ktwsEy11QY_48C8mKuYFhhohuBMOwzDUQYWua_unvna0yKT_tgJVK29F0vRGqERXp3uJcoBWz0lhq4yDBF3cnvFpIMhMITQDuiMw4ebeWQ8o8Jja9yoUup6d0FR9CzLcJFbXGDc-bWFQd24uYehqxC4bXWYmoXtI_Z6WcmLSgp1Wwy2mDZharp0I2vWXmhdSiTEnbJ7JTuGixJfeeiMEY-fSDgWR-H0NSt-5P7So6_uieZIeLzvpPMD1qhhT7HFlI8-xc",
    description: "Resinas espesas y dulces goteando en el aire fresco de la noche.",
  },
  {
    id: "arctic-hearth",
    name: "Arctic Hearth",
    tagline: "Fresco • Ozono",
    price: 175.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsM5ZlrlyxNwEwhs6gf9hF7XSVjge2agwDxpSgf3lNgPqSBdSRRNkhAwiRYVThrJcKBOaTZ_ZikvB140Zw8d-ouHAdM3bGpTVYnutzIUbX6_RE6h2H-I4pbtiMeNiv4nEChymmhZ-MZJ43GD4OqsD5EQ5k6nq580NS6RZ8FvjT82kd7i483EkYUFZSf-6Ahq4Al5EUJFa_9t9XO3gjLYlbODPCrLSANXnRBozYseZyIpOF6jh4ajPn8wqCDvwMKqz9cS6XPIjK_74o",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0vYAeecZz0Vq-SFkuiV8pI0NrdORtc4kofnJRwp8Fp6JaPqpuOCq6F0niUH2ypZDW89hbsv94aEPM0ffc5q-pevtpkGSWgFeXtFn6yRrKo5Dloc_UCOznF4XE5fUpf4UTqF0nu3u2SERTEtLL0T6i3BjpQMDepzJqpVaKaLD64JfzNpRJn-RovlTMFWpDcAYGXuZwFIK70dcmi6sh2MzAgc45LNAVgpDl4uV-bfXVRrrLGAF2mH_5Qu-7bZ7n5ITa1-oqoObJCZ-h",
    description: "El calor paradójico de un fuego en medio de la tundra congelada.",
  },
  {
    id: "ghost-orchid",
    name: "Ghost Orchid",
    tagline: "Floral • Empolvado",
    price: 215.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEpjUgqQIxVSqdBIaJOVuBQZIzTklEma5Vh7gHMV6il2b2bkBQZER3Bc-KZNZnBNcCNnkQIKITD8Dy2WkbUnGxfLYEW0pezbrB8wFscEibn6n_j3bI2SxuOuCvVMI0pcbscS6h3_EgbmIqj6K5jd0HvV0MytqBjiR0_hSqgkyuUoucm4qd_WJx9af5V6LzNqtelecnA5V8FvZhgzUMqRsSQqKrGP92nQLSTeHQ2MQ9aqxp5c9R7ceaFH2No20I3tdWA2jvgB81s-5e",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPxY9pQF7VlEEu8O1HEualsEqMSSotKXQjSL9xQFedJdAvLdZC79ixYQiIqJxvA5EOXxK1Jz_77Oz2aHDeTiixwSk-tZYFBafYGITpJ2Ks9sSx0bWpytetE2z5NQVSGKZDnNQVdlb4Hthz6kWR-W0Pk7CUpDckXXjl3Oobmm4a6EhcNGxL3hlhSe7XLk3owfq2R69IVDpOhm7ArDY5z8pkDc92r1bWQfIXiQMfoNX8dVh47rgHBHa7Gv6uySDbmlzis6bAY563sQzW",
    description: "Un aroma floral blanco esquivo que persigue los sentidos.",
  },
  {
    id: "solstice-gold",
    name: "Solstice Gold",
    tagline: "Cítrico • Cálido",
    price: 180.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlB320Bon27H44RbWOngEa0KD24J-VcK-haCn11Xs6Pb2n4HwgJ6rejStZbzLbeqSPUs_40jsSZYWeTmFLqyGGu-Bh3fFHKM4DEjNw2FXgKLQaSV8OZsztXRDqAmCMFA1deleCjJkLQgy26bA3wtnRbcXwVVcaRn5PydpwnqoGEFZAxoIrTSraUThhjtERhuRYd09Cmu2veYI0lijUowA6DHxyjf-vsMfcuUQkTUtbRvAytKikaRjmeufT5cmcREL5Cn5KvXln9YBq",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJzKOO4blEOMoxu1PKIdR_lWXfUZXeuXArNJegA6qyGPBcls4mJhAUU5izSopFKMftmCicTZ7WUhQjGHsiVS8IPTBJxM5muwlAI2ESf14gkb98EVw9-Z6GFOnt50aL_PzCDe849jH-C27_0NaIgbnPNSkS2ObAyJneu15YARpJQ-ddevYYTTbVRSYxo4XIuotqr8qHJcRb6s-6Km1cw_EoFjWqxBzVScau-bqD2_5ofKdvNEpkWdfGK1N0khY4upWIpuojr-Dq3CmB",
    description: "Capturando el sol en su cenit, irradiando calidez y vitalidad cítrica.",
  },
  {
    id: "sable-night",
    name: "Sable Night",
    tagline: "Almizcle • Cuero",
    price: 260.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm7tJJ2vQ0uG2sqJqie3n-JnhpLDbUj36qN55h7oQCEkA77RCoaFDaIHgIqYdcK1oNHxVQ7RwXEOqI_4eHo0ao5iYAFR2HxJtmYHeWkwa88MsFq4oetVyx4d6nZoJ5Kfoe7qfyL6ZRV1WrUYiDtOcEQxQpeIXI8_H3y1FawXRQPbOsSJzHdtJ89sgtxHm_ttm3BWTm6fVBgO1Vf_I-uN7zZJVOi6BZBethQ3mttAq_QBLFUvZXmwNtod5UInYbk_zlhRFjJKHdsIbU",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMc3SbwsU0OtBDNvUU7dANedPSgrmb4PBkmkDZgzUFYY_sDu616QEEhFtwwDPWunf4awyQu-sI7-fWaYFGEV79N4b6ow6HXRfqbM4ug0iJMDO0H7Uf-TnqTXLOn8qlsvDofiHmKV3nBcQW47z7odCpfdsMb6MgInLJ-TQs4eRei4OMkUVUPxNm6jTAgiUNiEjqo0Fxlf3KjXTPHTDuJr_bUUFZi6ik--9rlQbLIg5Be6zoPT8m6aJJm1Wx48VaTy3UN6ZjKkaTF_hJ",
    description: "Cuero suave y almizcle oscuro para las noches más profundas.",
  }
];

export const IMAGES = {
  hero1: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlRZnpy-NA-Y-pd6GH0jLh1m75SFP9dugCdJLSdHn_IV5fIu0ETSIT9B82a6iSOXbwCQM9CYRT3MpDDa9ko9WVGbDhUErHUJz6xSOg4k7MgKANgdtWbSOw-_p85QOk_N6BmweHMVYQleLlNbMbKxE-daewXKhXmFLW2ciHf_GRslMK2xLQNCKCPekeJUyBA0A3vE5j1R3O-RsWfrfTCJ72zPIQr0tFpgLNmjU90vIYxaRABCGVSKKBcen0_B8MmQZ1SRGooT51YFyZ",
  hero2: "https://lh3.googleusercontent.com/aida-public/AB6AXuBr6U3gsChza_w8UodkRQnGq7uFBwFHGy2z9umlPIvNUhziH_MHUFTX0A0XmzDEN2mKxydOgGCxRRdiSA9GTzBfvbQ4qOgelKl8yfjCj_-u-r6qyRw6MjkQDLInndSv2CmXHEviOZudp36af2azE6Laqe8jCgq1_shHMeSrOvpQEA2yfqH9WvIXrQ3z_anb_08BVH45qsO-iMHv36ztyt4oxHyXuCaF0T3Hl9SmHL6tUINFAEYx4YXV2XtUQZDeDbRIBYzTzLlpoUf2",
  monogram: "https://lh3.googleusercontent.com/aida-public/AB6AXuARJSo5b_EjuDOY4aXylsj83RAD-HGufP457I4X23vC74W8IMRgrq22rfWbJtxUXCcXDfAFRBBrS5qwpyiDsvtBrnTjrHnCKUxT4ywCHiG4ZplZ706u5aFD2rcqpIIQw77G93i-WgXLaSaBJyylls0O3H4QpK7ihPs7Gmt50BHi3QxJrwBXF2xFV0GCk30gnUTEnCXVo1m1O6UGTETo1ZH0XNDTmLh6oGT5P9CQp2PWgzrjqtph3tmF5knXNq5lzKg4yjcfQzybG6Su",
  detailHero: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8N0WgwHcqASjAON0vmpINSxYgdH1jNFm5GqIYobo-5TTlo4pMCvrJqfN4fCq5vxk8HuIl0QZtozohVYJX83-apP8cGA7NQISm8UW86l8PTkPC-O4UHMGptwNPkFCpV2Lp9NkeMxfJemR69q_VGQdNfGpiPwxoYcxCAduG2sx6IHSlByJjewFV2ng-aNtiMOIRSJEX4dBW_FFBZBjirANlY0qIMh0n2qjLhCDnYO3HyqKrvS34izj5E1iDkVW4AYYQzDMm0Vpekh5l"
}