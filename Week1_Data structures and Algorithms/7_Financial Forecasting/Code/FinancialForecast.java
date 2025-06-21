public class FinancialForecast {
 
    public static double futureValue(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        } 
        return (1 + growthRate) * futureValue(presentValue, growthRate, years - 1);
    }

    public static void main(String[] args) {
        double presentValue = 10000;     
        double annualGrowthRate = 0.08;  
        int years = 5;                   

        double result = futureValue(presentValue, annualGrowthRate, years);
        System.out.println("Recursion Method:");
        System.out.printf("Future Value after %d years: %.2f\n", years, result);
    }
}

