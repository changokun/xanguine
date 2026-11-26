// API Configuration
export const CONTACT_API_KEY = import.meta.env.VITE_CONTACT_API_KEY;
export const API_BASE_URL = import.meta.env.VITE_API_URL;

// Types
export interface ContactFormData {
  name: string;
  email: string;
  business?: string;
  message: string;
}

export interface ApplicationFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Contact Form Submission
export async function submitContactForm(data: ContactFormData): Promise<Response> {
  const response = await fetch(`${API_BASE_URL}contact/xanguine`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Contact-API-Key": CONTACT_API_KEY,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to submit contact form: ${response.statusText}`);
  }

  return response;
}

// Application Form Submission (with file upload)
export async function submitApplicationForm(
  data: ApplicationFormData,
  file: File | null
): Promise<Response> {
  const formData = new FormData();
  
  // Append form fields
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  formData.append("message", data.message);
  
  // Append file if present
  if (file) {
    formData.append("file", file);
  }

  const response = await fetch(`${API_BASE_URL}contact/salesperson`, {
    method: "POST",
    headers: {
      "X-Contact-API-Key": CONTACT_API_KEY,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Failed to submit application: ${response.statusText}`);
  }

  return response;
}
