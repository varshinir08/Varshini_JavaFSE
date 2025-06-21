public class Financial {
    public static double futureValueIterative(double presentValue, double growthRate, int years) {
    double value = presentValue;
    for (int i = 0; i < years; i++) {
        value *= (1 + growthRate);
    }
    return value;
}
 public static void main(String[] args) {
        double presentValue = 10000;     
        double annualGrowthRate = 0.08;  
        int years = 5;                   

        double result = futureValueIterative(presentValue, annualGrowthRate, years);
        System.out.println("Iterative method:");
        System.out.printf("Future Value after %d years: %.2f\n", years, result);
    }
}
