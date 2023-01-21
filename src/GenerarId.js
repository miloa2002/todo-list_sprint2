function GenerarId() {
  const a = new Date();
  const b = Math.floor(a / 10);
  return b;
}

export default GenerarId;
