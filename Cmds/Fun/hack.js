module.exports = async (context) => {
  try {
    const { m } = context;
    const mek = m; // The message object for quoting

    // Define the steps of the prank
    const steps = [
      '💻 *Akio-MD HACK STARTING...* 💻',
      '',
      '*Initializing hacking tools...* 🛠️',
      '*Connecting to remote servers...* 🌐',
      '',
      '```[██████████] 10%``` ⏳',
      '```[████████████████████] 20%``` ⏳',
      '```[██████████████████████████████] 30%``` ⏳',
      '```[████████████████████████████████████████] 40%``` ⏳',
      '```[██████████████████████████████████████████████████] 50%``` ⏳',
      '```[████████████████████████████████████████████████████████████] 60%``` ⏳',
      '```[██████████████████████████████████████████████████████████████████████] 70%``` ⏳',
      '```[████████████████████████████████████████████████████████████████████████████████] 80%``` ⏳',
      '```[██████████████████████████████████████████████████████████████████████████████████████████] 90%``` ⏳',
      '```[████████████████████████████████████████████████████████████████████████████████████████████████████] 100%``` ✅',
      '',
      '🔒 *System Breach: Successful!* 🔓',
      '🚀 *Command Execution: Complete!* 🎯',
      '',
      '*📡 Transmitting data...* 📤',
      '*🕵️‍♂️ Ensuring stealth...* 🤫',
      '*🔧 Finalizing operations...* 🏁',
      '*🔧 Keith is Getting Your All Data...* 🎁',
      '',
      '⚠️ *Note:* All actions are for demonstration purposes only.',
      '⚠️ *Reminder:* Ethical hacking is the only way to ensure security.',
      '⚠️ *Reminder:* Strong hacking is the only way to ensure security.',
      '',
      ' *👨‍💻 YOUR DATA HACK SUCCESSFULLY 👩‍💻☣*'
    ];

    // Loop through all the steps and send them
    for (const line of steps) {
      await context.client.sendMessage(m.chat, { text: line }, { quoted: mek });
      await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for effect
    }

  } catch (error) {
    console.error('Error during prank:', error);
    // Send a more detailed error message
    context.client.sendMessage(m.chat, {
      text: `❌ *Error!* Something went wrong. Reason: ${error.message}. Please try again later.`
    });
  }
};
