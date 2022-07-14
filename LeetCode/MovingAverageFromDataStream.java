import java.util.LinkedList;
import java.util.Queue;

class MovingAverage {

	private Queue<Integer> queue;
	private int maxSize;
	private double sum;

	public MovingAverage(int size) {
		queue = new LinkedList<Integer>();
		maxSize = size;
		sum = 0.0;
	}

	public double next(int val) {
		if (queue.size() == maxSize) {
			sum -= queue.remove();
		}

		queue.add(val);
		sum += val;

		return sum / queue.size();
	}

}