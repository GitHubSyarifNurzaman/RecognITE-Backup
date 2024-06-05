const validateText = async (text) => {
  // Implementasi logika validasi teks
  // Misalnya menggunakan regex atau library natural language processing (NLP)
  const isValid = text.includes('UU ITE'); // Contoh sederhana validasi
  return isValid;
};

module.exports = { validateText };
