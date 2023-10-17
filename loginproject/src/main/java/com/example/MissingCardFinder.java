package com.example;

public class MissingCardFinder {
    

    public static int findMissingCard(int[] cards, int totalCards) {
        int expectedSum = totalCards * (totalCards + 1) / 2;
        int actualSum = 0;

        for (int card : cards) {
            actualSum += card;
        }
        return expectedSum - actualSum;
    }

    public static void main(String[] args) {
        int[] cards = {1, 2, 3, 4, 5,6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,
            24,25,26,27,28,29,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50};
        int totalCards = 50;

        int missingCard = findMissingCard(cards, totalCards);
        System.out.println("Missing card: " + missingCard);
    }
}
