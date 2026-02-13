// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Merlichou",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Petit cadeau spécial 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
        
},

// Questions and answers
questions: {
    first: {
        text: "Je crois que c’est le bon moment pour te demander quelque chose 😏💌😂?", // First interaction
        yesBtn: "Oui",                                               // Text for "Yes" button
        noBtn: "Non",                                                // Text for "No" button
        secretAnswer: "Oui et je sens que ça devient très intéressant 😏❤️" // Secret hover message
    },
    second: {
        text: "Notre ambiance + notre solidité en équipe… on est à combien sur l’échelle “come back gagnant” ? 😏😂?", // Love meter
        startText: "Utilise le curseur pour déplacer",               // Text before the percentage
        nextBtn: "Malgré tout, je veux continuer l’aventure avec toi ❤️" // Text for the next button
    },
    third: {
        text: "Alors la princesse de mon royaume, est-ce que je peux officiellement t’inviter à être ma Valentine ? 💌🌹", // Big question
        yesBtn: "Oui (j’attendais ça) 😏❤️!",                      // Text for "Yes" button
        noBtn: "Ce bouton devait dire ‘Non’… mais c'est dohi 😂"   // Text for "No" button
    }
},

// Love meter messages
loveMessages: {
    extreme: "Wouah… à ce point-là ? 🔥😂🥰🚀💝",   // >3000%
    high: "Hmm… on est sur une voie très prometteuse 😏🚀💝", // >1000%
    normal: "Je sais pas deh 😂"                     // >100%
},

// Messages that appear after they say "Yes!"
celebration: {
    title: "Hourra ! Je me sens 😏😂🎉",
    message: "Alors le 14 je t'invite chez moi, on fera poisson au four dans l'après-midi… je sais que ça te manque 😏",
    emojis: "🎁❤️"  // These will bounce around
},

// Website Colors
colors: {
    backgroundStart: "#ffafbd",      // Background gradient start
    backgroundEnd: "#ffc3a0",        // Background gradient end
    buttonBackground: "#ff6b6b",     // Button color
    buttonHover: "#ff8787",          // Button hover color
    textColor: "#ff4757"             // Text color
},

// Animation Settings
animations: {
    floatDuration: "15s",           // How long hearts float (10-20s)
    floatDistance: "30px",          // Sideways movement (30-70px)
    bounceSpeed: "0.5s",            // Bounce animation speed (0.3-0.7s)
    heartExplosionSize: 1.5         // Final heart explosion size (1.2-2.0)

    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
