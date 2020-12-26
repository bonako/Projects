using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using TMPro;

public class MovementManager : MonoBehaviour
{
	public enum type {platformer, topDown};
	public type MoveType;
	public float moveSpeed, jumpHeight;
	public bool onGround = false;
	public int lives = 1;
	public float turnSpeed = 20f;
	public GameObject start;
    public TextMeshProUGUI lifeCounter;

	public GameObject startCamera;
	public GameObject camera;
	public GameObject powerUp;
	Renderer m_Renderer;

	Rigidbody2D rb;

    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        m_Renderer = GetComponent<Renderer>();
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
    	if (other.tag == "gravityslow")
    	{
    		if (rb.gravityScale > 1)
    	{
    		rb.gravityScale -= 1f;
    	}    		
    		Destroy(powerUp);
    	}
    	else if (other.tag == "moveslow")
    	{
    		moveSpeed = 1f;
    	}
    	else if (other.tag == "fast")
    	{
    		moveSpeed = 5f;
    	}
    	else if (other.tag == "zipline")
    	{
    		moveSpeed += 5f;
    	}
    	else if (other.tag == "out")
    	{
            // if (lives == 1)
            // {
            //     SceneManager.LoadScene(0);

            // }
            // lives--;
            // lifeCounter.SetText("Lives = " + lives);
    		transform.position = start.transform.position;
    		camera.transform.position = startCamera.transform.position;

    		// lives--;
    		// if (lives == 0) 
    		// {
    		// 	SceneManager.LoadScene(12);

    		// } else
    		// {
    		// 	transform.position = start.transform.position;
    		// 	// SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
    		// }
    	} else {
    		SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex + 1);
    	}
		// other.gameObject.SetActive(false);
  //   	this.gameObject.SetActive(false);

    }

    void isVisible()
    {

    }

    // Update is called once per frame
    void Update()
    {
    	if (!m_Renderer.isVisible)
        {
            transform.position = start.transform.position;
    		camera.transform.position = startCamera.transform.position;
        }
    	if (!onGround) 
    	{
    	transform.Rotate(-Vector3.forward, turnSpeed * Time.deltaTime);

    	}
    	transform.Translate(Vector2.right * Time.deltaTime * moveSpeed, Space.World);
    	camera.transform.Translate(Vector2.right * Time.deltaTime * moveSpeed);

    	if (Input.touchCount > 0 && Input.touches[0].phase == TouchPhase.Began) 
    	{
    		rb.gravityScale *= - 1;
    		// GetComponent<Rigidbody2D>().AddForce(Vector2.up * jumpHeight, ForceMode2D.Impulse);
    	}

    	if (Input.GetAxisRaw("Horizontal") > 0)
    	{
    		transform.Translate(Vector2.right * Time.deltaTime * moveSpeed);

    	} 
    	else if (Input.GetAxisRaw("Horizontal") < 0)
    	{
    		transform.Translate(Vector2.left * Time.deltaTime * moveSpeed);

    	}

    	if (MoveType == type.platformer && Input.GetKeyDown(KeyCode.Space))
    	{
    		    		rb.gravityScale *= - 1;

    	}

    	if (MoveType == type.platformer && Input.GetAxisRaw("Vertical") > 0)
    	{
    		// Physics2D.gravity = new Vector2(0, 9.8f);
    		rb.gravityScale *= - 1;


    		// GetComponent<Rigidbody2D>().AddForce(Vector2.up * jumpHeight, ForceMode2D.Impulse);


    	}

    	if (MoveType == type.platformer && Input.GetAxisRaw("Vertical") < 0)
    	{
    		// Physics2D.gravity = new Vector2(0, -9.8f);
    		rb.gravityScale *= - 1;


    		// GetComponent<Rigidbody2D>().AddForce(Vector2.up * jumpHeight, ForceMode2D.Impulse);

    	}
    	if (MoveType == type.topDown && Input.GetAxisRaw("Vertical") > 0 )
    	{
    		transform.Translate(Vector2.up * Time.deltaTime * moveSpeed);
    	}
    	else if (MoveType == type.topDown && Input.GetAxisRaw("Vertical") < 0)
    	{
    		transform.Translate(Vector2.down * Time.deltaTime * moveSpeed);

    	}
        
    }

    void OnCollisionEnter2D(Collision2D obj) 
    {
    	if (obj.gameObject.tag == "ground")
    	{
    		onGround = true;
    	}


    }
        void OnCollisionExit2D(Collision2D obj) 
    {
    	if (obj.gameObject.tag == "ground")
    	{
    		onGround = false;
    	}


    }
}
