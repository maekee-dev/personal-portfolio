const today = new Date()
const contentUpdate = 'February 14, 2024'
const workAvailable = true

module.exports = {
    year: today.getFullYear(),
    date: today.toLocaleDateString('en-IT', { day: 'numeric', month: 'long', year: 'numeric' }),
    content: contentUpdate,
    available: workAvailable
}