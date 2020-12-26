using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Camera : MonoBehaviour
{
	// public enum type {platformer, topDown};
	// public type MoveType;
	public float moveSpeed = 5f;
	// public bool onGround = false;
	// public int lives = 3;
	// public float turnSpeed = 20f;
	public GameObject start;

	// Rigidbody2D rb;

    // Start is called before the first frame update
    void Start()
    {
        // rb = GetComponent<Rigidbody2D>();
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
    	// if (other.tag == "gravityslow")
    	// {
    	// 	if (rb.gravityScale > 0.5)
    	// {
    	// 	rb.gravityScale -= 0.5f;
    	// }
    	// }
    	// else if (other.tag == "moveslow")
    	// {
    	// 	moveSpeed = 1f;
    	// }
    	// else if (other.tag == "fast")
    	// {
    	// 	moveSpeed = 5f;
    	// }
    	// else if (other.tag == "zipline")
    	// {
    	// 	moveSpeed += 5f;
    	// }
    	// else if (other.tag == "out")
    	// {
    		// transform.position = start.transform.position;

    		// lives--;
    		// if (lives == 0) 
    		// {
    		// 	SceneManager.LoadScene(12);

    		// } else
    		// {
    		// 	transform.position = start.transform.position;
    		// 	// SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
    		// }
    	// } else {
    	// 	SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex + 1);
    	// }
		// other.gameObject.SetActive(false);
  //   	this.gameObject.SetActive(false);

    }

    // Update is called once per frame
    void Update()
    {
    	// if (!onGround) 
    	// {
    	// transform.Rotate(-Vector3.forward, turnSpeed * Time.deltaTime);

    	// }
    	transform.Translate(Vector2.right * Time.deltaTime * moveSpeed);

    	// if (Input.touchCount > 0 && Input.touches[0].phase == TouchPhase.Began) 
    	// {
    	// 	rb.gravityScale *= - 1;
    	// 	// GetComponent<Rigidbody2D>().AddForce(Vector2.up * jumpHeight, ForceMode2D.Impulse);
    	// }

    	// if (Input.GetAxisRaw("Horizontal") > 0)
    	// {
    	// 	transform.Translate(Vector2.right * Time.deltaTime * moveSpeed);

    	// } 
    	// else if (Input.GetAxisRaw("Horizontal") < 0)
    	// {
    	// 	transform.Translate(Vector2.left * Time.deltaTime * moveSpeed);

    	// }

    	// if (MoveType == type.platformer && Input.GetKeyDown(KeyCode.Space))
    	// {
    	// 	    		rb.gravityScale *= - 1;

    	// }

    	// if (MoveType == type.platformer && Input.GetAxisRaw("Vertical") > 0)
    	// {
    	// 	// Physics2D.gravity = new Vector2(0, 9.8f);
    	// 	rb.gravityScale *= - 1;


    	// 	// GetComponent<Rigidbody2D>().AddForce(Vector2.up * jumpHeight, ForceMode2D.Impulse);


    	// }

    	// if (MoveType == type.platformer && Input.GetAxisRaw("Vertical") < 0)
    	// {
    	// 	// Physics2D.gravity = new Vector2(0, -9.8f);
    	// 	rb.gravityScale *= - 1;


    	// 	// GetComponent<Rigidbody2D>().AddForce(Vector2.up * jumpHeight, ForceMode2D.Impulse);

    	// }
    	// if (MoveType == type.topDown && Input.GetAxisRaw("Vertical") > 0 )
    	// {
    	// 	transform.Translate(Vector2.up * Time.deltaTime * moveSpeed);
    	// }
    	// else if (MoveType == type.topDown && Input.GetAxisRaw("Vertical") < 0)
    	// {
    	// 	transform.Translate(Vector2.down * Time.deltaTime * moveSpeed);

    	// }
        
    }

    // void OnCollisionEnter2D(Collision2D obj) 
    // {
    // 	if (obj.gameObject.tag == "ground")
    // 	{
    // 		onGround = true;
    // 	}


    // }
    //     void OnCollisionExit2D(Collision2D obj) 
    // {
    // 	if (obj.gameObject.tag == "ground")
    // 	{
    // 		onGround = false;
    // 	}


    // }
}
