module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#19D3AE",
          secondary: "#0FCFEC",
          accent: "#37cdbe",
        
          neutral: "#3A4256",
          "base-100": "#ffffff",
          
        },
        fontFamily: {
          'sans': ['ui-sans-serif', 'system-ui'],
          'serif': ['ui-serif', 'Georgia'],
          'mono': ['ui-monospace', 'SFMono-Regular'],
          'display': ['Oswald'],
          'body': ["Open Sans"],
        }
      },
      "dark",
      "cupcake",
    ],
  },
 
  plugins: [require("daisyui")],
}
