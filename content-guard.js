// ===============================
// Configuration
// ===============================
const config = {
  disableRightClick: true,
  disableDevToolsShortcuts: true,
  detectDevTools: true,
  scrambleCopy: true,
  disableClipboard: true,
  disablePrint: true,
  disableZoom: true,
};

// ===============================
// DevTools Detection
// ===============================
function setupDevToolsDetection() {
  if (!config.detectDevTools) return;

  let devtoolsOpen = false;

  const devtoolsCheck = () => {
    const start = performance.now();
    debugger; // Pauses execution when DevTools is open
    const end = performance.now();

    if (end - start > 100) {
      if (!devtoolsOpen) {
        devtoolsOpen = true;
        alert("DevTools detected! Page access restricted.");
      }
    } else {
      devtoolsOpen = false;
    }
  };

  setInterval(devtoolsCheck, 1000);
}

// ===============================
// Event Handlers
// ===============================
function setupEventListeners() {
  // Disable right-click
  if (config.disableRightClick) {
    const preventContextMenu = (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      console.log("Right-click blocked"); // Debugging
      return false;
    };

    [document, window].forEach((target) => {
      target.addEventListener("contextmenu", preventContextMenu, {
        capture: true,
        passive: false,
      });
    });
  }

  // Consolidated keydown handler
  if (config.disableDevToolsShortcuts || config.disableZoom) {
    document.addEventListener("keydown", (e) => {
      try {
        if (config.disableDevToolsShortcuts) {
          const blockedCombos = [
            e.key === "F12",
            e.ctrlKey &&
              e.shiftKey &&
              ["I", "J", "C"].includes(e.key.toUpperCase()),
            e.ctrlKey && e.key.toLowerCase() === "u",
            e.ctrlKey &&
              ["c", "x", "v", "s", "p"].includes(e.key.toLowerCase()),
            e.metaKey &&
              ["c", "x", "v", "s", "p"].includes(e.key.toLowerCase()),
          ];
          if (blockedCombos.some(Boolean)) {
            e.preventDefault();
            console.warn("Shortcut blocked");
          }
        }

        if (config.disableZoom) {
          if (
            (e.ctrlKey || e.metaKey) &&
            ["+", "-", "=", "0"].includes(e.key)
          ) {
            e.preventDefault();
          }
        }
      } catch (err) {
        console.error("Keydown handler error:", err);
      }
    });
  }

  // Handle copy event
  if (config.scrambleCopy || config.disableClipboard) {
    document.addEventListener("copy", (e) => {
      try {
        if (config.disableClipboard) {
          e.preventDefault();
          return;
        }
        if (config.scrambleCopy) {
          const selection = window.getSelection()?.toString();
          if (selection) {
            const scrambled =
              selection
                .split("")
                .sort(() => Math.random() - 0.5)
                .join("") + " [SCRAMBLED]";
            e.clipboardData.setData("text/plain", scrambled);
            e.preventDefault();
          }
        }
      } catch (err) {
        console.error("Copy handler error:", err);
      }
    });
  }

  // Disable cut, paste, drop
  if (config.disableClipboard) {
    ["cut", "paste", "drop"].forEach((evt) => {
      document.addEventListener(evt, (e) => {
        e.preventDefault();
      });
    });
  }

  // Disable print
  if (config.disablePrint) {
    window.addEventListener("beforeprint", (e) => {
      alert("Printing is disabled on this page.");
      e.preventDefault();
    });
  }
}

// ===============================
// Initialize Protections
// ===============================
function initialize() {
  try {
    setupDevToolsDetection();
    setupEventListeners();
  } catch (err) {
    console.error("Initialization error:", err);
  }
}

// Run after DOM is fully loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialize);
} else {
  initialize();
}
