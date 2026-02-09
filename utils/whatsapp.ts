import type { Product } from '../constants';

/**
 * Generates a WhatsApp URL with product information pre-filled
 * @param product - The product object to include in the message
 * @param whatsappNumber - The WhatsApp business number (with country code)
 * @returns Formatted WhatsApp URL
 */
export const generateWhatsAppProductURL = (
  product: Product,
  whatsappNumber: string
): string => {
  const baseURL = 'https://wa.me/';

  let message = `¡Hola! 👋\n\n`;
  message += `Estoy interesado en:\n`;

  if (product.isLimited) {
    message += `✨ EDICIÓN LIMITADA\n`;
  }

  message += `🔥 ${product.name} - ${product.tagline}\n`;
  message += `💰 $${product.price.toFixed(2)} USD\n\n`;
  message += `${product.description}\n\n`;
  message += `Me gustaría obtener más información sobre este perfume.\n\n`;
  message += `Enlace: https://pociónfire.com/product/${product.id}`;

  const encodedMessage = encodeURIComponent(message);
  return `${baseURL}${whatsappNumber}?text=${encodedMessage}`;
};
