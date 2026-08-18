export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        page: 'var(--gray-50)',
        ink: 'var(--navy-950)',
        muted: 'var(--gray-500)',
        surface: 'var(--white)',
        night: 'var(--navy-950)',
        accent: 'var(--orange-500)',
        navy: {
          DEFAULT: 'var(--navy-950)',
          900: 'var(--navy-900)',
          800: 'var(--navy-800)',
          700: 'var(--navy-700)',
          soft: '#e8eef8',
          deep: 'var(--navy-950)',
        },
        orange: {
          DEFAULT: 'var(--orange-500)',
          500: 'var(--orange-500)',
          600: 'var(--orange-600)',
          100: 'var(--orange-100)',
        },
        success: {
          DEFAULT: 'var(--success)',
          soft: '#eaf5e9',
        },
      },
      fontFamily: {
        display: ['Barlow Condensed', 'sans-serif'],
        heading: ['Barlow Condensed', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        product: 'var(--shadow-product)',
        lift: 'var(--shadow-lift)',
      },
      borderRadius: {
        card: 'var(--radius-card)',
        'product-card': 'var(--radius-card)',
        button: 'var(--radius-button)',
        pill: 'var(--radius-pill)',
      },
      spacing: {
        'header': 'var(--header-height)',
      },
      maxWidth: {
        'section': 'var(--max-width-section-content)',
      },
    },
  },
};
