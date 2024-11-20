const CARD_PATHS = {
    major: {
        baseUrl: './imgs/cards/major/',
        cards: [
            { id: 0, name: 'The Fool', file: 'fool.jpg', keywords: 'new beginnings, innocence, spontaneity' },
            { id: 1, name: 'The Magician', file: 'magician.jpg', keywords: 'manifestation, resourcefulness, power' },
            { id: 2, name: 'The High Priestess', file: 'priestess.jpg', keywords: 'intuition, mystery, spirituality' },
            { id: 3, name: 'The Empress', file: 'empress.jpg', keywords: 'fertility, nurturing, abundance' },
            { id: 4, name: 'The Emperor', file: 'emperor.jpg', keywords: 'authority, structure, leadership' },
            { id: 5, name: 'The Hierophant', file: 'hierophant.jpg', keywords: 'tradition, conformity, belief systems' },
            { id: 6, name: 'The Lovers', file: 'lovers.jpg', keywords: 'relationships, choices, harmony' },
            { id: 7, name: 'The Chariot', file: 'chariot.jpg', keywords: 'determination, willpower, success' },
            { id: 8, name: 'Strength', file: 'strength.jpg', keywords: 'courage, patience, compassion' },
            { id: 9, name: 'The Hermit', file: 'hermit.jpg', keywords: 'introspection, searching, guidance' },
            { id: 10, name: 'Wheel of Fortune', file: 'wheel.jpg', keywords: 'cycles, destiny, turning point' },
            { id: 11, name: 'Justice', file: 'justice.jpg', keywords: 'fairness, truth, cause and effect' },
            { id: 12, name: 'The Hanged Man', file: 'hanged-man.jpg', keywords: 'surrender, letting go, new perspective' },
            { id: 13, name: 'Death', file: 'death.jpg', keywords: 'endings, transformation, transition' },
            { id: 14, name: 'Temperance', file: 'temperance.jpg', keywords: 'balance, moderation, patience' },
            { id: 15, name: 'The Devil', file: 'devil.jpg', keywords: 'bondage, materialism, addiction' },
            { id: 16, name: 'The Tower', file: 'tower.jpg', keywords: 'sudden change, upheaval, revelation' },
            { id: 17, name: 'The Star', file: 'star.jpg', keywords: 'hope, inspiration, serenity' },
            { id: 18, name: 'The Moon', file: 'moon.jpg', keywords: 'illusion, fear, subconscious' },
            { id: 19, name: 'The Sun', file: 'sun.jpg', keywords: 'joy, success, vitality' },
            { id: 20, name: 'Judgement', file: 'judgement.jpg', keywords: 'rebirth, inner calling, absolution' },
            { id: 21, name: 'The World', file: 'world.jpg', keywords: 'completion, integration, accomplishment' }
        ]
    },
    minor: {
        cups: {
            baseUrl: './imgs/cards/minor/',
            cards: [
                { id: 22, name: 'Ace of Cups', file: 'cups-1.jpg', keywords: 'emotional beginnings, love, intuition' },
                { id: 23, name: 'Two of Cups', file: 'cups-2.jpg', keywords: 'partnership, connection, harmony' },
                { id: 24, name: 'Three of Cups', file: 'cups-3.jpg', keywords: 'celebration, friendship, community' },
                { id: 25, name: 'Four of Cups', file: 'cups-4.jpg', keywords: 'contemplation, apathy, reevaluation' },
                { id: 26, name: 'Five of Cups', file: 'cups-5.jpg', keywords: 'loss, regret, disappointment' },
                { id: 27, name: 'Six of Cups', file: 'cups-6.jpg', keywords: 'nostalgia, childhood, joy' },
                { id: 28, name: 'Seven of Cups', file: 'cups-7.jpg', keywords: 'choices, fantasy, illusion' },
                { id: 29, name: 'Eight of Cups', file: 'cups-8.jpg', keywords: 'walking away, seeking purpose' },
                { id: 30, name: 'Nine of Cups', file: 'cups-9.jpg', keywords: 'contentment, satisfaction, wishes' },
                { id: 31, name: 'Ten of Cups', file: 'cups-10.jpg', keywords: 'harmony, happiness, completion' },
                { id: 32, name: 'Page of Cups', file: 'cups-11.jpg', keywords: 'creative beginnings, intuitive messages' },
                { id: 33, name: 'Knight of Cups', file: 'cups-12.jpg', keywords: 'romance, charm, imagination' },
                { id: 34, name: 'Queen of Cups', file: 'cups-13.jpg', keywords: 'compassion, calm, emotional security' },
                { id: 35, name: 'King of Cups', file: 'cups-14.jpg', keywords: 'emotional balance, diplomacy' }
            ]
        },
        pentacles: {
            baseUrl: './imgs/cards/minor/',
            cards: [
                { id: 36, name: 'Ace of Pentacles', file: 'pentacles-1.jpg', keywords: 'opportunity, prosperity, new venture' },
                { id: 37, name: 'Two of Pentacles', file: 'pentacles-2.jpg', keywords: 'balance, adaptability, time management' },
                { id: 38, name: 'Three of Pentacles', file: 'pentacles-3.jpg', keywords: 'teamwork, collaboration, skill' },
                { id: 39, name: 'Four of Pentacles', file: 'pentacles-4.jpg', keywords: 'security, conservation, frugality' },
                { id: 40, name: 'Five of Pentacles', file: 'pentacles-5.jpg', keywords: 'hardship, loss, worry' },
                { id: 41, name: 'Six of Pentacles', file: 'pentacles-6.jpg', keywords: 'generosity, charity, sharing' },
                { id: 42, name: 'Seven of Pentacles', file: 'pentacles-7.jpg', keywords: 'assessment, reward, investment' },
                { id: 43, name: 'Eight of Pentacles', file: 'pentacles-8.jpg', keywords: 'apprenticeship, skill development' },
                { id: 44, name: 'Nine of Pentacles', file: 'pentacles-9.jpg', keywords: 'luxury, self-sufficiency, culmination' },
                { id: 45, name: 'Ten of Pentacles', file: 'pentacles-10.jpg', keywords: 'wealth, family, establishment' },
                { id: 46, name: 'Page of Pentacles', file: 'pentacles-11.jpg', keywords: 'manifestation, study, trust' },
                { id: 47, name: 'Knight of Pentacles', file: 'pentacles-12.jpg', keywords: 'efficiency, routine, conservatism' },
                { id: 48, name: 'Queen of Pentacles', file: 'pentacles-13.jpg', keywords: 'nurturing, practical, prosperity' },
                { id: 49, name: 'King of Pentacles', file: 'pentacles-14.jpg', keywords: 'abundance, power, security' }
            ]
        },
        swords: {
            baseUrl: './imgs/cards/minor/',
            cards: [
                { id: 50, name: 'Ace of Swords', file: 'swords-1.jpg', keywords: 'clarity, breakthrough, truth' },
                { id: 51, name: 'Two of Swords', file: 'swords-2.jpg', keywords: 'decision, stalemate, blocked emotions' },
                { id: 52, name: 'Three of Swords', file: 'swords-3.jpg', keywords: 'heartbreak, suffering, grief' },
                { id: 53, name: 'Four of Swords', file: 'swords-4.jpg', keywords: 'rest, restoration, contemplation' },
                { id: 54, name: 'Five of Swords', file: 'swords-5.jpg', keywords: 'conflict, defeat, win at all costs' },
                { id: 55, name: 'Six of Swords', file: 'swords-6.jpg', keywords: 'transition, moving forward, healing' },
                { id: 56, name: 'Seven of Swords', file: 'swords-7.jpg', keywords: 'deception, strategy, air' },
                { id: 57, name: 'Eight of Swords', file: 'swords-8.jpg', keywords: 'imprisonment, self-victimization' },
                { id: 58, name: 'Nine of Swords', file: 'swords-9.jpg', keywords: 'anxiety, worry, guilt' },
                { id: 59, name: 'Ten of Swords', file: 'swords-10.jpg', keywords: 'painful endings, deep wounds' },
                { id: 60, name: 'Page of Swords', file: 'swords-11.jpg', keywords: 'curiosity, restlessness, mental energy' },
                { id: 61, name: 'Knight of Swords', file: 'swords-12.jpg', keywords: 'action, impulsiveness, defending beliefs' },
                { id: 62, name: 'Queen of Swords', file: 'swords-13.jpg', keywords: 'complexity, perceptiveness, clear mindedness' },
                { id: 63, name: 'King of Swords', file: 'swords-14.jpg', keywords: 'intellectual power, authority, truth' }
            ]
        },
        wands: {
            baseUrl: './imgs/cards/minor/',
            cards: [
                { id: 64, name: 'Ace of Wands', file: 'wands-1.jpg', keywords: 'inspiration, new opportunities, growth' },
                { id: 65, name: 'Two of Wands', file: 'wands-2.jpg', keywords: 'planning, making decisions, leaving home' },
                { id: 66, name: 'Three of Wands', file: 'wands-3.jpg', keywords: 'looking ahead, expansion, rapid growth' },
                { id: 67, name: 'Four of Wands', file: 'wands-4.jpg', keywords: 'celebration, joy, harmony' },
                { id: 68, name: 'Five of Wands', file: 'wands-5.jpg', keywords: 'competition, conflict, diversity' },
                { id: 69, name: 'Six of Wands', file: 'wands-6.jpg', keywords: 'victory, success, public reward' },
                { id: 70, name: 'Seven of Wands', file: 'wands-7.jpg', keywords: 'challenge, competition, perseverance' },
                { id: 71, name: 'Eight of Wands', file: 'wands-8.jpg', keywords: 'movement, speed, air travel' },
                { id: 72, name: 'Nine of Wands', file: 'wands-9.jpg', keywords: 'resilience, grit, last stand' },
                { id: 73, name: 'Ten of Wands', file: 'wands-10.jpg', keywords: 'burden, extra responsibility, hard work' },
                { id: 74, name: 'Page of Wands', file: 'wands-11.jpg', keywords: 'exploration, excitement, freedom' },
                { id: 75, name: 'Knight of Wands', file: 'wands-12.jpg', keywords: 'action, adventure, impulsiveness' },
                { id: 76, name: 'Queen of Wands', file: 'wands-13.jpg', keywords: 'confidence, determination, social butterfly' },
                { id: 77, name: 'King of Wands', file: 'wands-14.jpg', keywords: 'leadership, vision, entrepreneur' }
            ]
        }
    }
};

function generateFullDeck() {
    const deck = [...CARD_PATHS.major.cards];
    
    // Add all minor arcana cards
    Object.values(CARD_PATHS.minor).forEach(suit => {
        deck.push(...suit.cards);
    });
    
    return deck;
}

export const tarotDeck = generateFullDeck(); 