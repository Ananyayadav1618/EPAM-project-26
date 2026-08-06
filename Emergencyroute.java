import java.util.*;

public class Emergencyroute{

    static List<List<Integer>> graph;
    static int[] distance;

    static void bfs(int start) {

        Queue<Integer> queue = new LinkedList<>();

        distance[start] = 0;
        queue.offer(start);

        while (!queue.isEmpty()) {

            int current = queue.poll();

            for (int neighbor : graph.get(current)) {

                if (distance[neighbor] == -1) {

                    distance[neighbor] = distance[current] + 1;
                    queue.offer(neighbor);
                }
            }
        }
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int M = sc.nextInt();
        int D = sc.nextInt();

        graph = new ArrayList<>();

        for (int i = 0; i <= N; i++) {
            graph.add(new ArrayList<>());
        }

        distance = new int[N + 1];
        Arrays.fill(distance, -1);

        for (int i = 0; i < M; i++) {

            int u = sc.nextInt();
            int v = sc.nextInt();

            graph.get(u).add(v);
            graph.get(v).add(u);
        }

        bfs(1);

        int count = 0;

        for (int i = 1; i <= N; i++) {

            if (distance[i] != -1 && distance[i] <= D) {
                count++;
            }
        }

        System.out.println(count);

        sc.close();
    }
}