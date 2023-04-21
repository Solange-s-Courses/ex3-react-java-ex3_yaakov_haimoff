package hac.javareact;

import java.io.*;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

// Define a class that implements Serializable
public class HighScore implements Serializable {

    private String name;
    private int score;

    public String getName() {
        return name;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public void setName(String name) {
        this.name = name;
    }

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


    //    public void addToHighScores(String path, String name, int score) throws IOException, ClassNotFoundException {
//        // Read existing scores from the file
//        List<HighScore> highScores = getHighScores(path);
//        // Add the new score to the list
//        HighScore highScore = new HighScore();
//        highScore.setScore(score);
//        highScore.setName(name);
//        highScores.add(highScore);
//        // Sort the list by score
//        highScores.sort(Comparator.comparingInt(HighScore::getScore));
//        // Only keep the top 5 scores
//        if (highScores.size() > 4) {
//            highScores = highScores.subList(0, 4);
//        }
//        // Write the updated list to the file
//        FileOutputStream fileOutputStream = new FileOutputStream(path);
//        ObjectOutputStream objectOutputStream = new ObjectOutputStream(fileOutputStream);
//        for (HighScore object : highScores) {
//            objectOutputStream.writeObject(object);
//        }
//        objectOutputStream.flush();
//        objectOutputStream.close();
//    }
    public void addToHighScores(String path, String name, int score) throws IOException, ClassNotFoundException {
        // Read existing scores from the file
        List<HighScore> highScores = getHighScores(path);
        boolean nameExists = false;

        // Check if the name already exists in the list of high scores
        for (HighScore hs : highScores) {
            if (hs.getName().equals(name)) {
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
            highScore.setScore(score);
            highScore.setName(name);
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