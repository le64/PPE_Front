<script setup>
import SideBar from '../components/sidebar.vue'
import NavBar from "../components/header.vue";
</script>
<template>
    <SideBar></SideBar>
    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <NavBar></NavBar>
        <div class="container-fluid py-4">
            <div class="row">
                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div class="card">
                        <div class="card-header p-3 pt-2">
                            <div
                                class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                                <i class="material-icons opacity-10">weekend</i>
                            </div>
                            <div class="text-end pt-1">
                                <p class="text-sm mb-0 text-capitalize">RECENSEMENTS</p>
                                <p class="text-sm mb-0 text-capitalize">EN COURS</p>
                                <h4 class="mb-0">$53k</h4>
                            </div>
                        </div>
                        <hr class="dark horizontal my-0">
                        <div class="card-footer p-3">
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div class="card">
                        <div class="card-header p-3 pt-2">
                            <div
                                class="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                                <i class="material-icons opacity-10">person</i>
                            </div>
                            <div class="text-end pt-1">
                                <p class="text-sm mb-0 text-capitalize">AGENT DE</p>
                                <p class="text-sm mb-0 text-capitalize">RECENSEMENTS</p>
                                <h4 class="mb-0">2,300</h4>
                            </div>
                        </div>
                        <hr class="dark horizontal my-0">
                        <div class="card-footer p-3">

                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div class="card">
                        <div class="card-header p-3 pt-2">
                            <div
                                class="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                                <i class="material-icons opacity-10">person</i>
                            </div>
                            <div class="text-end pt-1">
                                <p class="text-sm mb-0 text-capitalize">RAPPORT DE</p>
                                <p class="text-sm mb-0 text-capitalize">RECENSEMENTS</p>
                                <h4 class="mb-0">3,462</h4>
                            </div>
                        </div>
                        <hr class="dark horizontal my-0">
                        <div class="card-footer p-3">
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6">
                    <div class="card">
                        <div class="card-header p-3 pt-2">
                            <div
                                class="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                                <i class="material-icons opacity-10">weekend</i>
                            </div>
                            <div class="text-end pt-1">
                                <p class="text-sm mb-0 text-capitalize">RECENSEMENTS</p>
                                <p class="text-sm mb-0 text-capitalize">EFFECTUES</p>
                                <h4 class="mb-0">$103,430</h4>
                            </div>
                        </div>
                        <hr class="dark horizontal my-0">
                        <div class="card-footer p-3">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-12" style="margin-top: 20px;">
                <div class="card h-100">
                    <div class="card-header pb-0 p-3">
                        <div class="row">
                            <div class="col-6 d-flex align-items-center">
                                <h6 class="mb-0">Rapports Récents</h6>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-3 pb-0">
                        <ul class="list-group">
                            <li
                                class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                <div class="d-flex flex-column">
                                    <h6 class="mb-1 text-dark font-weight-bold text-sm">March, 01, 2020</h6>
                                    <span class="text-xs">#MS-415646</span>
                                </div>
                                <div class="d-flex align-items-center text-sm">
                                    $180
                                    <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4"><i
                                            class="material-icons text-lg position-relative me-1">picture_as_pdf</i>
                                        PDF</button>
                                </div>
                            </li>
                            <li
                                class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                <div class="d-flex flex-column">
                                    <h6 class="text-dark mb-1 font-weight-bold text-sm">February, 10, 2021</h6>
                                    <span class="text-xs">#RV-126749</span>
                                </div>
                                <div class="d-flex align-items-center text-sm">
                                    $250
                                    <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4"><i
                                            class="material-icons text-lg position-relative me-1">picture_as_pdf</i>
                                        PDF</button>
                                </div>
                            </li>
                            <li
                                class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                <div class="d-flex flex-column">
                                    <h6 class="text-dark mb-1 font-weight-bold text-sm">April, 05, 2020</h6>
                                    <span class="text-xs">#FB-212562</span>
                                </div>
                                <div class="d-flex align-items-center text-sm">
                                    $560
                                    <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4"><i
                                            class="material-icons text-lg position-relative me-1">picture_as_pdf</i>
                                        PDF</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-7 mt-4">
                    <div class="card">
                        <div class="card-header pb-0 p-3">
                            <div class="row">
                                <div class="col-6 d-flex align-items-center">
                                    <h6 class="mb-0">Agents de Recensements</h6>
                                </div>
                                <div class="col-6 text-end">
                                    <a href="/agentrecensement" class="btn btn-outline-primary btn-sm mb-0">TOUT
                                        VOIR</a>
                                </div>

                            </div>
                        </div>
                        <div class="card-body pt-4 p-3">
                            <ul class="list-group">
                                <li class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                                    <div class="d-flex flex-column">
                                        <h6 class="mb-3 text-sm">Oliver Liam</h6>
                                        <span class="mb-2 text-xs">Company Name: <span
                                                class="text-dark font-weight-bold ms-sm-2">Viking Burrito</span></span>
                                        <span class="mb-2 text-xs">Email Address: <span
                                                class="text-dark ms-sm-2 font-weight-bold">oliver@burrito.com</span></span>
                                        <span class="text-xs">VAT Number: <span
                                                class="text-dark ms-sm-2 font-weight-bold">FRB1235476</span></span>
                                    </div>
                                    <div class="ms-auto text-end">
                                        <a class="btn btn-link text-danger text-gradient px-3 mb-0"
                                            href="javascript:;"><i
                                                class="material-icons text-sm me-2">delete</i>Delete</a>
                                        <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;"><i
                                                class="material-icons text-sm me-2">edit</i>Edit</a>
                                    </div>
                                </li>
                                <li class="list-group-item border-0 d-flex p-4 mb-2 mt-3 bg-gray-100 border-radius-lg">
                                    <div class="d-flex flex-column">
                                        <h6 class="mb-3 text-sm">Lucas Harper</h6>
                                        <span class="mb-2 text-xs">Company Name: <span
                                                class="text-dark font-weight-bold ms-sm-2">Stone Tech Zone</span></span>
                                        <span class="mb-2 text-xs">Email Address: <span
                                                class="text-dark ms-sm-2 font-weight-bold">lucas@stone-tech.com</span></span>
                                        <span class="text-xs">VAT Number: <span
                                                class="text-dark ms-sm-2 font-weight-bold">FRB1235476</span></span>
                                    </div>
                                    <div class="ms-auto text-end">
                                        <a class="btn btn-link text-danger text-gradient px-3 mb-0"
                                            href="javascript:;"><i
                                                class="material-icons text-sm me-2">delete</i>Delete</a>
                                        <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;"><i
                                                class="material-icons text-sm me-2">edit</i>Edit</a>
                                    </div>
                                </li>
                                <li class="list-group-item border-0 d-flex p-4 mb-2 mt-3 bg-gray-100 border-radius-lg">
                                    <div class="d-flex flex-column">
                                        <h6 class="mb-3 text-sm">Ethan James</h6>
                                        <span class="mb-2 text-xs">Company Name: <span
                                                class="text-dark font-weight-bold ms-sm-2">Fiber Notion</span></span>
                                        <span class="mb-2 text-xs">Email Address: <span
                                                class="text-dark ms-sm-2 font-weight-bold">ethan@fiber.com</span></span>
                                        <span class="text-xs">VAT Number: <span
                                                class="text-dark ms-sm-2 font-weight-bold">FRB1235476</span></span>
                                    </div>
                                    <div class="ms-auto text-end">
                                        <a class="btn btn-link text-danger text-gradient px-3 mb-0"
                                            href="javascript:;"><i
                                                class="material-icons text-sm me-2">delete</i>Delete</a>
                                        <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;"><i
                                                class="material-icons text-sm me-2">edit</i>Edit</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 mt-4">
                    <div class="card h-100 mb-4">
                        <div class="card-header pb-0 px-3">
                            <div class="row">
                                <div class="col-md-6">
                                    <h6 class="mb-0">Your Transaction's</h6>
                                </div>
                                <div
                                    class="col-md-6 d-flex justify-content-start justify-content-md-end align-items-center">
                                    <i class="material-icons me-2 text-lg">date_range</i>
                                    <small>23 - 30 March 2020</small>
                                </div>
                            </div>
                        </div>
                        <div class="card-body pt-4 p-3">
                            <h6 class="text-uppercase text-body text-xs font-weight-bolder mb-3">Newest</h6>
                            <ul class="list-group">
                                <li
                                    class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                    <div class="d-flex align-items-center">
                                        <button
                                            class="btn btn-icon-only btn-rounded btn-outline-danger mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center"><i
                                                class="material-icons text-lg">expand_more</i></button>
                                        <div class="d-flex flex-column">
                                            <h6 class="mb-1 text-dark text-sm">Netflix</h6>
                                            <span class="text-xs">27 March 2020, at 12:30 PM</span>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold">
                                        - $ 2,500
                                    </div>
                                </li>
                                <li
                                    class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                    <div class="d-flex align-items-center">
                                        <button
                                            class="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center"><i
                                                class="material-icons text-lg">expand_less</i></button>
                                        <div class="d-flex flex-column">
                                            <h6 class="mb-1 text-dark text-sm">Apple</h6>
                                            <span class="text-xs">27 March 2020, at 04:30 AM</span>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                                        + $ 2,000
                                    </div>
                                </li>
                            </ul>
                            <h6 class="text-uppercase text-body text-xs font-weight-bolder my-3">Yesterday</h6>
                            <ul class="list-group">
                                <li
                                    class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                    <div class="d-flex align-items-center">
                                        <button
                                            class="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center"><i
                                                class="material-icons text-lg">expand_less</i></button>
                                        <div class="d-flex flex-column">
                                            <h6 class="mb-1 text-dark text-sm">Stripe</h6>
                                            <span class="text-xs">26 March 2020, at 13:45 PM</span>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                                        + $ 750
                                    </div>
                                </li>
                                <li
                                    class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                    <div class="d-flex align-items-center">
                                        <button
                                            class="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center"><i
                                                class="material-icons text-lg">expand_less</i></button>
                                        <div class="d-flex flex-column">
                                            <h6 class="mb-1 text-dark text-sm">HubSpot</h6>
                                            <span class="text-xs">26 March 2020, at 12:30 PM</span>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                                        + $ 1,000
                                    </div>
                                </li>
                                <li
                                    class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                    <div class="d-flex align-items-center">
                                        <button
                                            class="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center"><i
                                                class="material-icons text-lg">expand_less</i></button>
                                        <div class="d-flex flex-column">
                                            <h6 class="mb-1 text-dark text-sm">Creative Tim</h6>
                                            <span class="text-xs">26 March 2020, at 08:30 AM</span>
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                                        + $ 2,500
                                    </div>
                                </li>
                                <li
                                    class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                    <div class="d-flex align-items-center">
                                        <button
                                            class="btn btn-icon-only btn-rounded btn-outline-dark mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center"><i
                                                class="material-icons text-lg">priority_high</i></button>
                                        <div class="d-flex flex-column">
                                            <h6 class="mb-1 text-dark text-sm">Webflow</h6>
                                            <span class="text-xs">26 March 2020, at 05:00 AM</span>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center text-dark text-sm font-weight-bold">
                                        Pending
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

</template>