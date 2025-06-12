'use client';
import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';

const Navbar = styled.nav`
    background-color: #333;
    padding: 10px;
    color: white;
    
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
    
        li {
        margin-right: 20px;
        cursor: pointer;
    
        &:hover {
            text-decoration: underline;
        }
        }
    }
`;
// app/product/page.tsx

export default function NavbarComponent() {
    return (
        <Navbar>
            <nav>
                <ul>
                    <li>
                        <Link href="/product">
                            Product
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        Service
                    </li>
                </ul>
            </nav>
        </Navbar>
    )
}
