

This repository contains artifacts related to our semester project for UW-Madison CS 782: Advanced Computer and Network Security (Fall 2021). The project is entitled *Very Suspicious Code: A Security Analysis of the VSCode Extension Ecosystem*; its authors are Amanda Xu, Brianna Cochran, and Wiley Corning. See the project report for more information.

## Index

`Attack-Testbed-Extension` contains our demo extension, which shows the potential for a malicious extension to exercise sensitive OS capabilities and perform attacks.

`Fake-Extension-Hop-Light` contains our impersonator extension, which mimics the appearance of a third-party color theme on the Marketplace.

`docker-target` is a small Flask web server application designed (as part of a third-party tutorial) to be packaged in a Docker container. It can be used as a target to demonstrate the Docker hijacking attack.