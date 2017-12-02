<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

class LuckyController extends Controller
{
    /**
     * @Route("/lucky/number")
     */
    public function number()
    {
        $number = mt_rand(0, 100);

        // return new Response(
        //     "<html><body><h1>Your lucky number is {{ $number }}</h1></body></html>"
        // );


        return $this->render('lucky.html.twig', array(
            'number' => $number
        ));
    }
}