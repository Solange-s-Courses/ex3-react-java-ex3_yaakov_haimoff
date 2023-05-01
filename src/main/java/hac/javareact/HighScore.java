package hac.javareact;

import java.io.*;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

/**
 * A Serializable class that represents a high score entry.
 */
public class HighScore implements Serializable {

    private String name; // The name of the player who achieved this score
    private int score; // The score achieved by the player

    /**
     * Returns the name of the player who achieved this score.
     *
     * @return A String representing the player's name
     */
    public String getName() {
        return name;
    }

    /**
     * Returns the score achieved by the player.
     *
     * @return An integer representing the player's score
     */
    public int getScore() {
        return score;
    }

    /**
     * Sets the score achieved by the player.
     *
     * @param score An integer representing the player's score
     */
    public void setScore(int score) {
        this.score = score;
    }

    /**
     * Sets the name of the player who achieved this score.
     *
     * @param name A String representing the player's name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Reads the existing high scores from a file and returns them as a list of HighScore objects.
     *
     * @param path A String representing the path of the file containing the high scores
     * @return A list of HighScore objects representing the existing high scores
     * @throws IOException            If an I/O error occurs while reading the file
     * @throws ClassNotFoundException If the class of a serialized object cannot be found while reading the file
     */
    public List<HighScore> getHighScores(String path) throws IOException, ClassNotFoundException {
        List<HighScore> highScores = new ArrayList<>();
        if (!new File(path).exists()) {
            return highScores;
        }
        FileInputStream fileInputStream = new FileInputStream(path);
        ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);
        try {
            HighScore score;
            while ((score = (HighScore) objectInputStream.readObject()) != null) {
                highScores.add(score);
            }
        } catch (EOFException | ClassNotFoundException e) {
            // Reached end of file
        }
        objectInputStream.close();
        return highScores;
    }

    /**
     * Adds a new high score entry to the existing high scores and writes them to a file.
     *
     * @param path  A String representing the path of the file containing the high scores
     * @param name  A String representing the name of the player who achieved the new high score
     * @param score An integer representing the new high score achieved by the player
     * @throws IOException            If an I/O error occurs while writing the updated high scores to the file
     * @throws ClassNotFoundException If the class of a serialized object cannot be found while reading the file
     */

    public void addToHighScores(String path, String name, int score) throws IOException, ClassNotFoundException {
        // Read existing scores from the file
        List<HighScore> highScores = getHighScores(path);
        boolean nameExists = false;

        // Check if the name already exists in the list of high scores
        for (HighScore hs : highScores) {
            if (hs.getName().equals(name.trim())) {
                // Update the score for the existing name if the new score is lower
                if (hs.getScore() > score) {
                    hs.setScore(score);
                }
                nameExists = true;
                break;
            }
        }
        // Add the name as a new entry if it does not exist in the list
        if (!nameExists) {
            HighScore highScore = new HighScore();
            highScore.setName(name.trim());
            highScore.setScore(score);
            highScores.add(highScore);
        }
        // Sort the list by score
        highScores.sort(Comparator.comparingInt(HighScore::getScore));
        // Only keep the top 5 scores
        if (highScores.size() > 5) {
            highScores = highScores.subList(0, 5);
        }
        // Write the updated list to the file
        FileOutputStream fileOutputStream = new FileOutputStream(path);
        ObjectOutputStream objectOutputStream = new ObjectOutputStream(fileOutputStream);
        for (HighScore object : highScores) {
            objectOutputStream.writeObject(object);
        }
        objectOutputStream.flush();
        objectOutputStream.close();
    }
}