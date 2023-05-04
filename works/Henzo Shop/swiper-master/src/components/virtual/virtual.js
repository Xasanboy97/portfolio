d-image) | /office:document/office:automatic-styles/style:style/style:table-cell-properties/style:background-image | /office:document/office:automatic-styles/style:style/style:table-properties/style:background-image | /office:document/office:automatic-styles/style:style/style:graphic-properties/style:background-image">
                    <uof:其他对象 uof:locID="u0036" uof:attrList="标识符 内嵌 公共类型 私有类型">
                        <xsl:attribute name="uof:标识符"><xsl:value-of select="concat('background-image_',count(preceding::style:background-image))"/></xsl:attribute>
                        <xsl:attribute name="uof:公共类型">png</xsl:attribute>
                        <xsl:attribute name="uof:内嵌">true</xsl:attribute>
                        <uof:数据 uof:locID="u0037">
                            <xsl:value-of select="office:binary-data"/>
                        </uof:数据>
                    </uof:其他对象>
                </xsl:for-each>
                <xsl:for-each select="(/office:document/office:styles/text:list-style/text:list-level-style-image) | (/office:document/office:automatic-styles/text:list-style/text:list-level-style-image)">
                    <uof:其他对象 uof:locID="u0036" uof:attrList="标识符 内嵌 公共类型 私有类型">
                        <xsl:attribute name="uof:标识符"><xsl:value-of select="concat('image_numbering_',count(preceding::text:list-level-style-image))"/></xsl:attribute>
                        <xsl:attribute name="uof:公共类型">png</xsl:attribute>
                        <xsl:attribute name="uof:内嵌">true</xsl:attribute>
                        <uof:数据 uof:locID="u0037">
                            <xsl:value-of select="office:binary-data"/>
                        </uof:数据>
                    </uof:其他对象>
                </xsl:for-each>
                <xsl:for-each select="/office:document/office:styles/draw:fill-image">
                    <uof:其他对象 uof:locID="u0036" uof:attrList="标识符 内嵌 公共类型 私有类型">
                        <xsl:attribute name="uof:标识符"><xsl:value-of select="@draw:name"/></xsl:attribute>
                        <xsl:attribute name="uof:公共类型">png</xsl:attribute>
                        <xsl:attribute name="uof:内嵌">true</xsl:attribute>
                        <uof:数据 uof:locID="u0037">
                            <xsl:value-of select="office:binary-data"/>
                        </uof:数据>
                    </uof:其他对象>
                </xsl:for-each>
                <!--xsl:apply-templates select="/office:document/office:automatic-styles/style:style[@style:family = 'graphics']"/>
                <xsl:apply-templates select="office:styles/style:style[@style:family = 'graphics']"/>
                <xsl:apply-templates select="office:styles/style:default-style [@style:family = 'graphics']"/-->
            </uof:对象集>
            <uof:文字处理 uof:locID="u0047">
                <字:公用处理规则 uof:locID="t0000">
                    <xsl:apply-templates select="office:settings"/>
                    <xsl:call-template name="GetUsers"/>
                    <xsl:call-template name="GetTrackChanges"/>
                    <xsl:call-template name="GetAnnotations"/>
                </字:公用处理规则>
                <字:主体 uof:locID="t0016">
                    <xsl:for-each select="office:automatic-styles/style:page-layout[@style:name='pm1']">
                        <xsl:call-template name="style:page-layout"/>
                    </xsl:for-each>
                    <!--xsl:call-template name="office:automatic-styles/style:page-layout[@style:name='pm1']"/-->
                    <!--xsl:apply-templates select="office:automatic-styles/style:page-layout[@style:name='pm1']"/-->
                    <xsl:apply-templates select="office:body/office:text"/>
                    <xsl:call-template name="logic-chapter"/>
                </字:主体>
            </uof:文字处理>
        </uof:UOF>
    </xsl:template>
    <xsl:template name="logic-chapter">
        <xsl:element name="字:逻辑章节">
            <xsl:attribute name="uof:locID">t0050</xsl:attribute>
        </xsl:element>
    </xsl:template>
    <xsl:template name="GetAnnotations">
        <xsl:if test="/*/office:body/office:text//office:annotation ">
            <字:批注集 uof:locID="t0014">
                <xsl:for-each select="/*/office:body/office:text//office:annotation">
                    <字:批注 uof:locID="t0015" uof:attrList="区域引用 作者 日期 作者缩写">
                        <xsl:attribute name="字:作者"><xsl:value-of select="generate-id()"/></xsl:attribute>
                        <xsl:attribute name="字:日期"><xsl:value-of select="dc:date"/></xsl:attribute>
                        <xsl:attribute name="字:区域引用">cmt<xsl:number from="/office:document/office:body/office:text" level="any" count="office:annotation"/></xsl:attribute>
                        <xsl:for-each select="./node()">
                            <xsl:choose>
                                <xsl:when test="name()='text:p'">
                                    <xsl:call-template name="execParagraph">
                                        <xsl:with-param name="currlistlvl" select="number('0')"/>
                                        <xsl:with-param name="liststylename" select="string('00000')"/>
                                    </xsl:call-template>
                                </xsl:when>
                                <xsl:when test="name()='table:table'">
                                    <xsl:call-template name="exec_table"/>
                                </xsl:when>
                                <xsl:otherwise/>
                            </xsl:choose>
                        </xsl:for-each>
                    </字:批注>
                </xsl:for-each>
            </字:批注集>
        </xsl:if>
    </xsl:template>
    <xsl:template name="GetTrackChanges">
        <xsl:if test="/*/office:body/office:text/text:tracked-changes">
            <字:修订信息集 uof:locID="t0012">
                <xsl:for-each select="/*/office:body/office:text/text:tracked-changes/text:changed-region">
                    <字:修订信息 字:标识符="{@text:id}" 字:作者="{generate-id()}" 字:日期="{node()//office:change-info/dc:date}" uof:locID="t0013" uof:attrList="标识符 作者 日期"/>
                </xsl:for-each>
            </字:修订信息集>
        </xsl:if>
    </xsl:template>
    <xsl:template name="GetUsers">
        <xsl:if test="/*/office:body/office:text/text:tracked-changes//office:change-info/dc:creator or //office:annotation/@office:author or //office:annotation/dc:creator">
            <字:用户集 uof:locID="t0010">
                <xsl:for-each select="/*/office:body/office:text/text:tracked-changes/text:changed-region">
                    <字:用户 字:标识符="{generate-id()}" 字:姓名="{node()//office:change-info/dc:creator}" uof:locID="t0011" uof:attrList="标识符 姓名"/>
                </xsl:for-each>
                <xsl:for-each select="//office:annotation">
                    <字:用户 字:标识符="{generate-id()}" 字:姓名="{dc:creator}" uof:locID="t0011" uof:attrList="标识符 姓名"/>
                </xsl:for-each>
            </字:用户集>
        </xsl:if>
    </xsl:template>
    <xsl:key match="/office:document/office:automatic-styles/style:style | /office:document/office:styles/style:style" name="graphicset" use="@style:name"/>
    <xsl:template match="text:p" mode="styles">
        <xsl:for-each select="child::*">
            <xsl:variable name="nodename1">
                <xsl:value-of select="name()"/>
            </xsl:variable>
            <xsl: