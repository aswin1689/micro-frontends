#!/bin/bash

install_deps() {
    (cd aggregator && yarn)
    (cd cart-react && yarn)
    (cd products-vue && yarn)
}

install_deps