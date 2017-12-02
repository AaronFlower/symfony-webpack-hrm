<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class IndexController extends Controller
{
    public function __construct()
    {
        
    }
    /**
     * @Route("/index/index")
     */
    public function index()
    {
    	$number = mt_rand(0, 100);

    	return new Response(
    	    '<html><body>Kidding Foo</body></html>'
    	);
    }
}
