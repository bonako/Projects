using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LevelScreen : MonoBehaviour
{
	public int moveSpeed = 20;
	public GameObject mainCamera;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {

    }

    public void switchNext()
    {
    	mainCamera.transform.Translate(17.8f,0,0);   
    }

    public void switchBack()
    {
    	mainCamera.transform.Translate(-17.8f,0,0);   
    }
}
