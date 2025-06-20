import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

class Product {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public void display() {
        System.out.println("ID: " + productId + ", Name: " + productName + ", Category: " + category);
    }
}

public class EcommerceSearch { 
    public static int linearSearch(Product[] products, String name) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productName.equalsIgnoreCase(name)) {
                return i;
            }
        }
        return -1;
    } 
    public static int binarySearch(Product[] products, String name) {
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(name);

            if (cmp == 0) return mid;
            else if (cmp < 0) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in); 
        Product[] products = {
            new Product(101, "Shoes", "Fashion"),
            new Product(102, "Laptop", "Electronics"),
            new Product(103, "Smartphone", "Electronics"),
            new Product(104, "T-shirt", "Fashion"),
            new Product(105, "Book", "Stationery")
        };

        System.out.println("Enter product name to search:");
        String searchName = sc.nextLine();
 
        System.out.println("\nPerforming Linear Search...");
        int linearIndex = linearSearch(products, searchName);
        if (linearIndex != -1) {
            System.out.println("Product found at index (Linear): " + linearIndex);
            products[linearIndex].display();
        } else {
            System.out.println("Product not found (Linear Search).");
        } 
        System.out.println("\nPerforming Binary Search...");
        int binaryIndex = binarySearch(products, searchName);
        if (binaryIndex != -1) {
            System.out.println("Product found at index (Binary): " + binaryIndex);
            products[binaryIndex].display();
        } else {
            System.out.println("Product not found (Binary Search).");
        }

        sc.close();
    }
}
