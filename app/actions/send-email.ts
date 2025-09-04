"use server"

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!name || !email || !subject || !message) {
    return { success: false, error: "All fields are required" }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address" }
  }

  try {
    // Create mailto URL with form data
    const mailtoUrl = `mailto:nichoy.rnn@gmail.com?subject=${encodeURIComponent(`Portfolio Contact: ${subject}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`

    // In a real application, you would use a service like Resend, SendGrid, or Nodemailer
    // For now, we'll return success and the client will handle opening the email client
    return {
      success: true,
      mailtoUrl,
      message: "Email client will open with your message pre-filled",
    }
  } catch (error) {
    console.error("Error processing email:", error)
    return { success: false, error: "Failed to process your message. Please try again." }
  }
}
