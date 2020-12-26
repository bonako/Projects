using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MovingSpheres : MonoBehaviour
{
	public int moveSpeed = 3;
    public Vector2 vector = Vector2.up;

    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {    
    	transform.Translate(vector * Time.deltaTime * moveSpeed, Space.World);

    	if(transform.position.y <= 3)
    	{
    		vector = Vector2.up;
    	}
    	if (transform.position.y >= 7)
    	{
    		vector = Vector2.down;
    	}
        
    }
}
