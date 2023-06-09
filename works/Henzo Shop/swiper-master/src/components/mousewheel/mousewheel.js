                    </xsl:call-template>
                </xsl:variable>
                <xsl:choose>
                    <xsl:when test="$first-left-top!=''">
                        <xsl:value-of select="$first-left-top"/>
                    </xsl:when>
                    <xsl:when test="$rest-left-top !=''">
                        <xsl:value-of select="$rest-left-top "/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:when>
            <xsl:otherwise>
                <xsl:value-of select="$return"/>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    <xsl:template name="number-to-character">
        <xsl:param name="number"/>
        <xsl:choose>
            <xsl:when test="$number =  0"/>
            <xsl:when test="$number =  1">A</xsl:when>
            <xsl:when test="$number =  2">B</xsl:when>
            <xsl:when test="$number =  3">C</xsl:when>
            <xsl:when test="$number =  4">D</xsl:when>
            <xsl:when test="$number =  5">E</xsl:when>
            <xsl:when test="$number =  6">F</xsl:when>
            <xsl:when test="$number =  7">G</xsl:when>
            <xsl:when test="$number =  8">H</xsl:when>
            <xsl:when test="$number =  9">I</xsl:when>
            <xsl:when test="$number = 10">J</xsl:when>
            <xsl:when test="$number = 11">K</xsl:when>
            <xsl:when test="$number = 12">L</xsl:when>
            <xsl:when test="$number = 13">M</xsl:when>
            <xsl:when test="$number = 14">N</xsl:when>
            <xsl:when test="$number = 15">O</xsl:when>
            <xsl:when test="$number = 16">P</xsl:when>
            <xsl:when test="$number = 17">Q</xsl:when>
            <xsl:when test="$number = 18">R</xsl:when>
            <xsl:when test="$number = 19">S</xsl:when>
            <xsl:when test="$number = 20">T</xsl:when>
            <xsl:when test="$number = 21">U</xsl:when>
            <xsl:when test="$number = 22">V</xsl:when>
            <xsl:when test="$number = 23">W</xsl:when>
            <xsl:when test="$number = 24">X</xsl:when>
            <xsl:when test="$number = 25">Y</xsl:when>
            <xsl:when test="$number = 26">Z</xsl:when>
            <xsl:otherwise/>
        </xsl:choose>
    </xsl:template>
    <xsl:template name="search-left-top-validation-inacell">
        <xsl:param name="row-num"/>
        <xsl:param name="column-num"/>
        <xsl:param name="cell"/>
        <xsl:param name="validation-name"/>
        <xsl:choose>
            <xsl:when test="$cell/@table:content-validation-name=$validation-name">
                <xsl:value-of select="concat($cell/ancestor::table:table/@table:name,'.',$column-num,' ',$row-num)"/>
            </xsl:when>
            <xsl:otherwise/>
        </xsl:choose>
    </xsl:template>
    <xsl:template name="search-left-top-validation-inarow">
        <xsl:param name="row-num"/>
        <xsl:param name="column-num"/>
        <xsl:param name="firstcells"/>
        <xsl:param name="validation-name"/>
        <xsl:param name="return"/>
        <xsl:choose>
            <xsl:when test="$firstcells and $return=''">
                <xsl:variable name="firstcell" select="$firstcells[1]"/>
                <xsl:variable name="first-left-top">
                    <xsl:call-template name="search-left-top-validation-inacell">
                        <xsl:with-param name="row-num" select="$row-num"/>
                        <xsl:with-param name="column-num" select="$column-num"/>
                        <xsl:with-param name="cell" select="$firstcell"/>
                        <xsl:with-param name="validation-name" select="$validation-name"/>
                    </xsl:call-template>
                </xsl:variable>
                <xsl:variable name="column-num-p">
                    <xsl:choose>
                        <xsl:when test="$firstcell/@table:number-columns-repeated">
                            <xsl:value-of select="$column-num+ $firstcell/@table:number-columns-repeated"/>
                        </xsl:when>
                        <xsl:otherwise>
                            <xsl:value-of select="$column-num+ 1"/>
                        </xsl:otherwise>
                    </xsl:choose>
                </xsl:variable>
                <xsl:variable name="rest-left-top">
                    <xsl:call-template name="search-left-top-validation-inarow">
                        <xsl:with-param name="row-num" select="$row-num"/>
                        <xsl:with-param name="column-num" select="$column-num-p"/>
                        <xsl:with-param name="firstcells" select="$firstcells[position()!=1]"/>
                        <xsl:with-param name="validation-name" select="$validation-name"/>
                        <xsl:with-param name="return" select="$first-left-top"/>
                    </xsl:call-template>
                </xsl:variable>
                <xsl:choose>
                    <xsl:when test="$first-left-top!=''">
                        <xsl:value-of select="$first-left-top"/>
                    </xsl:when>
                    <xsl:when test="$rest-left-top !=''">
                        <xsl:value-of select="$rest-left-top "/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="''"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:when>
            <xsl:otherwise>
                <xsl:value-of select="$return"/>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
</xsl:stylesheet>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                   <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--
 * This file is part of the LibreOffice project.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * This file incorporates work covered by the following license notice:
 *
 *   Licensed to the Apache Software Foundation (ASF) under one or more
 *   contributor license agreements. See the NOTICE file distributed
 *   with this work for additional information regarding copyright
 *   ownership. The ASF licenses this file to you under the Apache
 *   License, Version 2.0 (the "License"); you may not use this file
 *   except in compliance with the License. You may obtain a copy of
 *   the License at http://www.apache.org/licenses/LICENSE-2.0 .
-->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:dt="uuid:C2F41010-65B3-11d1-A29F-00AA00C14882" xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0" xmlns:uof="http://schemas.uof.org/cn/2003/uof" xmlns:表="http://schemas.uof.org/cn/2003/uof-spreadsheet" xmlns:演="http://schemas.uof.org/cn/2003/uof-slideshow" xmlns:字="http://schemas.uof.org/cn/2003/uof-wordproc" xmlns:图="http://schemas.uof.org/cn/2003/graph" xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0" xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0" xmlns:table="urn:oasis:names:tc:opendocument:xmlns:table:1.0" xmlns:draw="urn:oasis:names:tc:opendocument:xmlns:drawing:1.0" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:html="http://www.w3.org/TR/REC-html40" xmlns:presentation="urn:oasis:names:tc:opendocument:xmlns:presentation:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:number="urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0" xmlns:svg="urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0" xmlns:chart="urn:oasis:names:tc:opendocument:xmlns:chart:1.0" xmlns:dr3d="urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0" xmlns:math="http://www.w3.org/1998/Math/MathML" xmlns:form="urn:oasis:names:tc:opendocument:xmlns:form:1.0" xmlns:script="urn:oasis:names:tc:opendocument:xmlns:script:1.0" xmlns:config="urn:oasis:names:tc:opendocument:xmlns:config:1.0" xmlns:ooo="http://openoffice.org/2004/office" xmlns:ooow="http://openoffice.org/2004/writer" xmlns:oooc="http://openoffice.org/2004/calc" xmlns:dom="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.w3.org/2002/xforms" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:smil="urn:oasis:names:tc:opendocument:xmlns:smil-compatible:1.0" xmlns:anim="urn:oasis:names:tc:opendocument:xmlns:animation:1.0" office:version="1.0" exclude-result-prefixes="office style text table draw fo xlink dc meta number presentation svg chart dr3d math form script config ooo ooow oooc dom xforms smil anim">
    <xsl:output method="xml" indent="no" encoding="UTF-8" version="1.0"/>
    <!--xsl:key name="colWidth" match="/office:automatic/style:style/" use="@style:column-width"/-->
    <xsl:variable name="swValueWithUnit">
        <xsl:value-of select="/office:document/office:automatic-styles/style:page-layout/style:page-layout-properties/@fo:page-width"/>
    </xsl:variable>
    <xsl:variable name="uofUnit">
        <xsl:choose>
            <xsl:when test="contains($swValueWithUnit,'in')">inch</xsl:when>
            <xsl:when test="contains($swValueWithUnit,'cm')">cm</xsl:when>
            <xsl:when test="contains($swValueWithUnit,'mm')">mm</xsl:when>
            <xsl:when test="contains($swValueWithUnit,'pt')">pt</xsl:when>
            <xsl:otherwise>inch</xsl:otherwise>
        </xsl:choose>
    </xsl:variable>
    <xsl:variable name="ooUnit">
        <xsl:choose>
            <xsl:when test="contains($swValueWithUnit,'in')">inch</xsl:when>
            <xsl:when test="contains($swValueWithUnit,'cm')">cm</xsl:when>
            <xsl:when test="contains($swValueWithUnit,'mm')">mm</xsl:when>
            <xsl:when test="contains($swValueWithUnit,'pt')">pt</xsl:when>
            <xsl:otherwise>inch</xsl:otherwise>
        </xsl:choose>
    </xsl:variable>
    <xsl:template match="/">
        <xsl:apply-templates select="office:document"/>
    </xsl:template>
    <xsl:template match="office:document">
        <uof:UOF xmlns:uof="http://schemas.uof.org/cn/2003/uof" xmlns:表="http://schemas.uof.org/cn/2003/uof-spreadsheet" xmlns:演="http://schemas.uof.org/cn/2003/uof-slideshow" xmlns:字="http://schemas.uof.org/cn/2003/uof-wordproc" xmlns:图="http://schemas.uof.org/cn/2003/graph" uof:language="cn" uof:locID="u0000" uof:version="1.0" uof:mimetype="vnd.uof.text">
            <xsl:apply-templates select="office:meta"/>
            <xsl:if test="/office:document/office:body/office:text/text:p/text:bookmark-start|/office:document/office:body/office:text/text:p/text:bookmark">
                <uof:书签集 uof:locID="u0027">
                    <xsl:for-each select="/office:document/office:body/office:text/text:p/text:bookmark-start|/office:document/office:body/office:text/text:p/text:bookmark">
                        <uof:书签 uof:locID="u0028" uof:attrList="名称">
                            <xsl:attribute name="uof:名称"><xsl:value-of select="@text:name"/></xsl:attribute>
                            <uof:文本位置 uof:locID="u0029" uof:attrList="区域引用">
                                <xsl:attribute name="字:区域引用"><xsl:value-of select="generate-id()"/></xsl:attribute>
                            </uof:文本位置>
                        </uof:书签>
                    </xsl:for-each>
                </uof:书签集>
            </xsl:if>
            <xsl:if test="/office:document/office:body/office:text/text:p/text:a | /office:document/office:body/office:text/text:p/draw:a | /office:document/office:body/office:text/table:table/table:table-row/table:table-cell/text:p/text:a | /office:document/office:body/office:text/text:table-of-content/text:index-body/text:p/text:a">
                <uof:链接集 uof:locID="u0031">
                    <xsl:for-each select="/office:document/office:body/office:text/text:p/text:a | /office:document/office:body/office:text/text:p/draw:a | /office:document/office:body/office:text/table:table/table:table-row/table:table-cell/text:p/text:a | /office:document/office:body/office:text/text:table-of-content/text:index-body/text:p/text:a">
                        <xsl:variable name="hyperStr" select="@xlink:href"/>
                        <uof:超级链接 uof:locID="u0032" uof:attrList="标识符 目标 书签 式样引用 已访问式样引用 提示 链源">
                            <xsl:if test="contains($hyperStr,'#')">
                                <xsl:attribute name="uof:书签"><xsl:value-of select="substring-after($hyperStr,'#')"/></xsl:attribute>
                            </xsl:if>
                            <xsl:variable name="num">
                                <xsl:number from="/office:document/office:body/office:text" level="any" count="text:a | table:table/table:table-row/table:table-cell/text:a"/>
                            </xsl:variable>
                            <xsl:attribute name="uof:链源"><xsl:value-of select="concat('hlnk',$num)"/></xsl:attribute>
                            <xsl:attribute name="uof:标识符"><xsl:value-of select="concat('hyk_','hlnk',$num)"/></xsl:attribute>
                            <xsl:if test="not(contains($hyperStr,'#'))">
                                <xsl:attribute name="uof:目标"><xsl:value-of select="$hyperStr"/></xsl:attribute>
                            </xsl:if>
                            <xsl:if test="@office:name">
                                <xsl:attribute name="uof:提示"><xsl:value-of select="@office:name"/></xsl:attribute>
                            </xsl:if>
                            <xsl:if test="@text:style-name">
                                <xsl:attribute name="uof:式样引用"><xsl:value-of select="@text:style-name"/></xsl:attribute>
                            </xsl:if>
                            <xsl:if test="@text:visited-style-name">
                                <xsl:attribute name="uof:已访问式样引用"><xsl:value-of select="@text:visited-style-name"/></xsl:attribute>
                            </xsl:if>
                        </uof:超级链接>
                    </xsl:for-each>
                </uof:链接集>
            </xsl:if>
            <uof:式样集 uof:locID="u0039">
                <xsl:apply-templates select="office:font-face-decls"/>
                <xsl:call-template name="自动编号集"/>
                <xsl:call-template name="shiyang"/>
                <xsl:apply-templates select="office:automatic-styles/style:style" mode="style"/>
            </uof:式样集>
            <uof:对象集 uof:locID="