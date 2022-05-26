import java.util.Random;

public class java1 {

    public int randomNumber() {
        return Math.random();
    }

    public String randomUsername() {
        String[] randomUsernames = { "CowboyJoe", "FreddieBill", "DonDuke" };
        return randomUsernames[Math.random() * randomUsernames.length];
    }

    public boolean isBlue(String blue) {
        return blue.equalsIgnoreCase("Blue") ? true : false;
    }

    public boolean isGreen(String green) {
        return green.equalsIgnoreCase("Green") ? true : false;
    }

    public int multiply(int x, int y) {
        return x * y;
    }

    public double squareRoot(int x) {
        return Math.sqrt(x);
    }

    public int subtract(int x, int y) {
        return x - y;
    }

    public int add(int x, int y) {
        return x + y;
    }

    public int divide(int x, int y) {
        return x / y;
    }

    public int squared(int x) {
        return x * x;
    }

    public int power(int x, int y) {
        return Math.pow(x, y);
    }

    public int add5(int x) {
        return x + 5;
    }

    public int add1(int x) {
        return x + 1;
    }

    public int multiply1000(int x) {
        return x * 1000;
    }

    public int multiply1000000(int x) {
        return x * 1000000;
    }

    public double divide3(int x) {
        return x / 3;
    }

    public double percent(int x) {
        return x / 100;
    }

    public int minToSeconds(int x) {
        return x * 60;
    }

    public int daysToSeconds(int x) {
        return x / 24 / 60 * 60;
    }

    public boolean isRafeh(String Rafeh) {
        return Rafeh.equalsIgnoreCase("Rafeh") ? true : false;
    }

    public boolean isAPillar(String pillar) {
        switch (pillar) {
            case "Fasting":
                return true;
            case "Zakat":
                return true;
            case "Hajj":
                return true;
            case "Prayer":
                return true;
            case "Shahadat":
                return true;
            default:
                return false;
        }
    }

    public boolean containsSet(String stringy) {
        return stringy.matches("^[\\w]+$");
    }

    public boolean startPEndQ(String stringy) {
        return stringy.charAt(0) == ("p")
                ? stringy.charAt(stringy.length() - 1) == ("q") ? true : false
                : false;
    }

    public boolean containsG(String stringy) {
        return stringy.contains("g");
    }

    public String removeIP(String IPaddress) {
        return IPaddress.replaceAll("(?<=^|\\.)0+(?!\\.|$)", "");
    }

    public String replacePython(String stringy) {
        return stringy.replaceAll("python", "java").replaceAll("code", "coding");
    }

    public int countDecimals(double decimal) {
        if (n.contains("."))
            return n.replaceAll(".*\\.(?=\\d?)", "").length();
        return 0;
    }

    public double average3(int x, int y, int z) {
        return (x + y + z) / 3;
    }

    public char middleChar(String s) {
        int x = 0;
        while (x < s.length() / 2) {
            x++;
        }
        return s.charAt(x);
    }

    public double areaTriangle(int x, int y, int z) {
        double area = 0;
        double s = (side1 + side2 + side3) / 2;
        area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
        return area;
    }

    public Date currentDate() {
        return Instant.now();
    }

    public static boolean is_Prime(long n) {

        if (n < 2)
            return false;

        for (int i = 2; i <= n / 2; i++) {

            if (n % i == 0)
                return false;
        }
        return true;
    }

    public static boolean isLucky(int n) {
        // Create an array of size 10 to initialize all elements as
        // false to check if a digit is already seen or not.
        boolean temp[] = new boolean[10];
        for (int i = 0; i < 10; i++)
            temp[i] = false;
        while (n > 0) {
            // Find the last digit
            int digit = n % 10;
            // Return false if digit is already seen,
            if (temp[digit])
                return false;
            temp[digit] = true;
            n = n / 10;
        }
        return true;
    }

    public static boolean is_Amstrong(int n) {
        int remainder, sum = 0, temp = 0;
        temp = n;
        while (n > 0) {
            remainder = n % 10;
            sum = sum + (remainder * remainder * remainder);
            n = n / 10;
        }
        return sum == temp;
    }

    public static boolean isHappy_number(int num) {
        Set<Integer> unique_num = new HashSet<Integer>();

        while (unique_num.add(num)) {
            int value = 0;
            while (num > 0) {
                value += Math.pow(num % 10, 2);
                num /= 10;
            }
            num = value;
        }

        return num == 1;
    }
}
