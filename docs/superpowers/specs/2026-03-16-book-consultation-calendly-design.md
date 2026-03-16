# Design Spec: Book Consultation (Calendly Integration)

## 1. Overview
This specification details the design for the "Book Consultation" feature in the Jeshinotabi Next.js application, specifically using the **Calendly Integration** approach (Option 1).

The goal is to replace the current manual workflow (Linktree -> Google Forms -> WhatsApp outreach) with a streamlined, single-step scheduling process directly on the `jeshinotabi.com` domain. This ensures a premium user experience while transferring the data collection and scheduling burden entirely to Calendly. 

## 2. Architecture & Components

### 2.1 Route
- **Path**: `/book-consultation` (or similar top-level route in the Next.js `app` directory).

### 2.2 UI Components
- **`CalendlyWidget`**: A React component wrapping the [`react-calendly`](https://github.com/calendly/react-calendly) `InlineWidget`.
- **Container Styling**: To maintain the "Premium Dark" aesthetic of Jeshinotabi, the Calendly widget will be housed within a responsive "Glassmorphism" container.
  - Background: Deep translucent dark (e.g., `bg-black/40 backdrop-blur-md`).
  - Border: Subtle violet accent (`border border-[#7f13ec]/30`).
  - Shadow: Soft violet glow (`shadow-[0_0_15px_rgba(127,19,236,0.15)]`).

### 2.3 Dependencies
- `react-calendly`: For rendering the embed.
- `canvas-confetti` (Optional): To fire a celebration animation upon successful booking.

## 3. Data Flow & Configuration

### 3.1 Calendly Configuration (Admin Side)
Because we are discarding Google Forms, Calendly must capture the necessary qualification data. 
Jess must configure her existing Calendly Event Type to include the following **Invitee Questions**:
1. ¿Qué mes te gustaría ir? (Dropdown/Radio)
2. ¿Cuántos adultos son? (Dropdown/Radio)
3. Número de WhatsApp completo con código de país (Text)
4. ¿Cómo llegaste aquí conmigo? (Dropdown/Radio)

### 3.2 Application State (Frontend)
The Next.js application does not need to manage form state natively for the booking. However, it will listen to Calendly's lifecycle events using the `useCalendlyEventListener` hook.

- **`onProfilePageViewed`**: Can be used to trigger a loading skeleton removal.
- **`onEventScheduled`**: Triggered when the user successfully books the time. We will use this to:
  1. Trigger confetti (`canvas-confetti`).
  2. Show a personalized "Thank You" success state in our UI, confirming that Jess will reach out via WhatsApp at the scheduled time.

## 4. Alternative Approaches Considered & Rejected
- **Custom Native Form (Boutique Form)**: Rejected for this specific branch to test the lowest-friction path. The Calendly approach handles timezones and calendar invites natively, which the Boutique Form would require manual handling for.
- **Direct WhatsApp Handoff**: High conversion but lacks structure and calendar synchronization.

## 5. Security & Privacy
- No PII (Personally Identifiable Information) regarding the booking is stored in the Jeshinotabi database in this version. The data resides securely within Calendly and is transmitted according to their privacy standards.
- If data syncing is required in the future, a Calendly Webhook routing to a Next.js API Route (`app/api/webhooks/calendly/route.ts`) should be implemented.

## 6. Implementation Plan / Next Steps
1. Install `react-calendly` capability.
2. Build the `/book-consultation` page layout and container.
3. Integrate the `InlineWidget`.
4. Wrap with `useCalendlyEventListener` for success state handling.
5. Deploy and assist Jess with updating her Calendly Event settings to match the new intake requirements.
