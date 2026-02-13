// Basic Information
valentineName: "Merlichou"                    // Your Valentine's name
pageTitle: "Petit cadeau spécial 💝" // Browser tab title

// Floating Background Elements
floatingEmojis: {
    hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis in background
    bears: ['🧸', '🐻']                       // Bear emojis in background
}

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: " je crois que c’est le bon moment pour te demander quelque chose 😏​💌😂​?",                                    // First interaction
            yesBtn: "Oui",                                             // Text for "Yes" button
            noBtn: "Non",                                               // Text for "No" button
            secretAnswer: "Oui et je sens que ça devient très interressant 😏​❤️"           // Secret hover message
        },
        second: {
            text: "Notre ambiance + notre solidité en équipe… on est à combien sur l’échelle “come back gagnant” ? 😏😂​?",                          // For the love meter
            startText: "Utilise le curseur pour deplacer ​",                                   // Text before the percentage
            nextBtn: "Malgré tout, je veux continuer l’aventure avec toi ❤️"                                         // Text for the next button
        },
        third: {
            text: "Alors la princesse de mon royaume, est-ce que je peux officiellement t’inviter à être ma Valentine ? 💌🌹", // The big question!
            yesBtn: "Oui (j’attendais ça) 😏​❤️!",                                             // Text for "Yes" button
            noBtn: "Ce bouton devait dire ‘Non’… mais c'est dohi 😂 "                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Wouah… à ce point-là ? 🔥😂​🥰🚀💝",  // Shows when they go past 3000%
        high: "Hmm… on est sur une voie très prometteurse 😏🚀💝",              // Shows when they go past 1000%
        normal: "je sais pas deh 😂 "                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Hourra ! Je me sennnnnnnns 😏​😂​🎉",
        message: "Alors le 14 je t'invite chez moi, on fera poisson au four dans l'après-midi… je sais que ça te manque😏​",
        emojis: "🎁❤️"  // These will bounce around
    },

// Website Colors
colors: {
    backgroundStart: "#ffafbd",      // Background gradient start
    backgroundEnd: "#ffc3a0",        // Background gradient end
    buttonBackground: "#ff6b6b",     // Button color
    buttonHover: "#ff8787",          // Button hover color
    textColor: "#ff4757"            // Text color
}

// Animation Settings
animations: {
    floatDuration: "15s",           // How long hearts float (10-20s)
    floatDistance: "50px",          // Sideways movement (30-70px)
    bounceSpeed: "0.5s",            // Bounce animation speed (0.3-0.7s)
    heartExplosionSize: 1.5         // Final heart explosion size (1.2-2.0)
}

// Music Settings
music: {
    enabled: true, // Music feature is enabled
    autoplay: true, // Try to autoplay (note: some browsers may block this)
    musicUrl: "YOUR_CLOUDINARY_URL_HERE", // Paste your music URL here
    startText: "🎵 Play Music", // Button text to start music
    stopText: "🔇 Stop Music", // Button text to stop music
    volume: 0.5 // Volume level (0.0 to 1.0)
}
