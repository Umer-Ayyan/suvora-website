export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  return new Promise((resolve) => {
    console.log('Submitting form to serverless endpoint...', data);
    
    // Simulate network delay
    setTimeout(() => {
      // Simulate success
      resolve({
        success: true,
        message: 'Message sent successfully. We will be in touch shortly.'
      });
      
      // In a real app, you would fetch() to a Vercel function here
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
    }, 1500);
  });
};