import java.util.*;

public class Main {

    static List<List<Integer>> tree;
    static int[] key;
    static int count = 0;
    static int k;

    static void dfs(int node, int parent, int xor) {

        xor = xor ^ key[node];

        if (xor >= k) {
            count++;
        }

        for (int child : tree.get(node)) {

            if (child != parent) {
                dfs(child, node, xor);
            }
        }
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        k = sc.nextInt();

        key = new int[N + 1];

        for (int i = 1; i <= N; i++) {
            key[i] = sc.nextInt();
        }

        tree = new ArrayList<>();

        for (int i = 0; i <= N; i++) {
            tree.add(new ArrayList<>());
        }

        for (int i = 0; i < N - 1; i++) {

            int u = sc.nextInt();
            int v = sc.nextInt();

            tree.get(u).add(v);
            tree.get(v).add(u);
        }

        dfs(1, 0, 0);

        System.out.println(count);

        sc.close();
    }
}
