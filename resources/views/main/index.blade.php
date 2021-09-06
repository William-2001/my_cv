@extends('layouts.main')

@section('content')
<div id="jumbo" class="container-fluid jumbo-outer-wrapper">
    @include('layouts.nav')
     <div class="jumbo">
        <div class="row">
            <div class="col-md-6 jumbo-content">
                <h2 class="header"><span class="emph">Hi</span>, My name is William Gazali!</h2>
                <p class="text-muted">Based on Indonesia</p>
                <p>Contact: </p>
                <p>
                    <a href="williamgozali2001@gmail.com"><i class="far fa-envelope emph"></i> &emsp;williamgozali2001@gmail.com</a><br>
                    <a href=""><i class="fab fa-whatsapp emph"></i> &emsp;+62 82114398851</a><br>
                    <a href="https://www.instagram.com/willdriveyounuts/"><i class="fab fa-instagram emph"></i> &emsp;@willdriveyounuts</a><br>
                    <a href="https://www.linkedin.com/in/william-gazali-31880a20a"><i class="fab fa-linkedin emph"></i> &emsp;Wiliam Gazali</a>
                </p>
            </div>
            <div class="col-md-6">
                <img src="../assets/cropped.png" alt="" class="jumbo-pic">
            </div>
        </div>

    </div>
</div>
<div class="container-fluid outer-container">
    @include('main.about')
    @include('main.skills')
    @include('main.education')
</div>

@endsection
