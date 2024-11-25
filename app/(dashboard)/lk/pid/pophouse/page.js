'use client'
// import node module libraries
import Link from 'next/link';
import { useState } from 'react';
import { Col, Row, Container, Image, Card } from 'react-bootstrap';

const Layout = () => {
    const [pid, setPid] = useState('')

    return (
        <Container fluid className="px-6 py-4">
            <Row>
                <Col xl={12} xxl={12} xs={12} lg={12} md={12} sm={12}>
                    <Card>
                        <Card.Header>
                            ตรวจสอบรายการบุคคล
                        </Card.Header>
                        <Card.Body>
                            <div className='text-center'>
                                <label className='px-2'>
                                    เลขประจำตัวประชาชน 
                                </label>
                                <input type='text' value={pid} onChange={(e)=>{ setPid(e.target.value); console.log(e.target.value) }} className='form-control w-25 d-inline'  />
                                <button className='btn btn-primary mx-1'>ค้นหา</button>
                            </div>
                            <Row className='my-3'>
                                <Col xl={2} xxl={2} lg={4} md={12} sm={12} xs={12} >
                                    เลขประจำตัวประชาชน
                                </Col>
                                <Col xl={4} xxl={4} lg={8} md={12} sm={12} xs={12} className='text-primary'>
                                    {pid}
                                </Col>
                                <Col xl={2} xxl={2} lg={4} md={12} sm={12} xs={12}>
                                    เลขประจำตัวประชาชน
                                </Col>
                                <Col xl={4} xxl={4} lg={8} md={12} sm={12} xs={12} className='text-primary'>
                                    {pid}
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Layout