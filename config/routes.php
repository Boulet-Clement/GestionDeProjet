<?php

use Slim\Routing\RouteCollectorProxy;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

$app->get('/', function ($request, $response, $args) {
    return $this->get('view')->render($response, 'home/home.html.twig', [
        "session" => $_SESSION
    ]);
});

