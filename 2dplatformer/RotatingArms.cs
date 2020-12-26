using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class RotatingArms : MonoBehaviour
{
	public int turnSpeed = 300;
    public bool reload = true;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        transform.Rotate(-Vector3.forward * Time.deltaTime * turnSpeed);
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
    	if (other.tag == "Player" && reload)
    	{
    		SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
    	}
    }
}
