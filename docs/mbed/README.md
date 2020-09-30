---
title: mbed
---

# Mbed

[Mbed](https://os.mbed.com/docs/mbed-os/v6.3/introduction/index.html) is a platform for development with ARM microcontrollers. It is an Real-Time Operating System (OS), hardware agnostic library, and multiple development environments.

## Setup mbed studio

1. Download and install [mbed studio](https://os.mbed.com/studio/)
1. Clone the [mbed-os repository](https://github.com/ARMmbed/mbed-os)
1. Check the installation with an mbed blinky example
    1. Select a suitable target (for instance FRDM-K64F)
    1. [More information](https://os.mbed.com/docs/mbed-studio/current/getting-started/index.html)

## Mbed OS vs. Mbed OS bare metal

Mbed projects can be categorized in two profiles: Mbed OS and the Mbed OS bare metal profile. The Mbed OS profile is suited for applications which need a full RTOS, for example when using a TCP/IP Stack or support for multithreading. The Mbed OS bare metal profile does not feature an RTOS. In this case scheduling is determined by the application itself.
