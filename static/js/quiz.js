// Quiz Landing Page Interactions
// Handles quiz selection, email modal, and redirect logic

document.addEventListener("DOMContentLoaded", () => {
  const quizOptions = document.querySelectorAll(".quiz-option-card");
  const emailModal = document.getElementById("email-modal");
  const emailForm = document.getElementById("email-form");
  const emailInput = document.getElementById("email-input");
  const selectionDisplay = document.getElementById("selection-display");
  const hiddenSelection = document.getElementById("quiz-selection");

  let selectedCollection = "";

  // Quiz option click handlers
  quizOptions.forEach((option) => {
    option.addEventListener("click", () => {
      selectedCollection = option.dataset.collection;
      showEmailModal(selectedCollection);
    });

    // Keyboard accessibility
    option.addEventListener("keypress", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectedCollection = option.dataset.collection;
        showEmailModal(selectedCollection);
      }
    });
  });

  // Show email modal
  function showEmailModal(collection) {
    const collectionNames = {
      conflict: "The Conflict",
      void: "The Void",
      path: "The Path",
      other: "Other",
    };

    selectionDisplay.textContent = collectionNames[collection] || collection;
    hiddenSelection.value = collection;
    emailModal.classList.add("active");

    // Focus email input
    setTimeout(() => {
      emailInput.focus();
    }, 300);

    // Trap focus in modal
    trapFocus(emailModal);
  }

  // Email form submission
  emailForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const collection = hiddenSelection.value;

    if (!email || !isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Store email in localStorage for personalization
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userCollection", collection);

    // Submit to Netlify Forms (if configured)
    try {
      const formData = new FormData(emailForm);
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
    } catch (error) {
      console.error("Form submission error:", error);
      // Continue to redirect even if form submission fails
    }

    // Redirect to tier selection page
    const redirectUrls = {
      conflict: "/tiers/conflict",
      void: "/tiers/void",
      path: "/tiers/path"
    };
    
    const targetUrl = redirectUrls[collection];
    if (targetUrl) {
      window.location.href = targetUrl;
    } else {
      console.error('Unknown collection:', collection);
      window.location.href = '/';
    }
  });

  // Close modal on click outside
  emailModal.addEventListener("click", (e) => {
    if (e.target === emailModal) {
      closeModal();
    }
  });

  // Close modal on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && emailModal.classList.contains("active")) {
      closeModal();
    }
  });

  function closeModal() {
    emailModal.classList.remove("active");
    emailForm.reset();
  }

  // Email validation
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Focus trap for accessibility
  function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    element.addEventListener("keydown", (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    });
  }
});

// Analytics tracking (optional - add your analytics code)
function trackQuizSelection(collection) {
  if (typeof gtag !== "undefined") {
    gtag("event", "quiz_selection", {
      event_category: "engagement",
      event_label: collection,
    });
  }
}

function trackEmailCapture(collection) {
  if (typeof gtag !== "undefined") {
    gtag("event", "email_capture", {
      event_category: "conversion",
      event_label: collection,
    });
  }
}
