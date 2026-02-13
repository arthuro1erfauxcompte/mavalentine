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
        hearts: ['❤️', '💖',],  // Heart emojis
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
        noBtn: "Ce bouton devait dire ‘Non’… mais c'est drôle 😂"   // Text for "No" button
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
    floatDistance: "50px",          // Sideways movement (30-70px)
    bounceSpeed: "0.5s",            // Bounce animation speed (0.3-0.7s)
    heartExplosionSize: 1.5         // Final heart explosion size (1.2-2.0)
},

    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
